import { Button, Card, Table, Switch, Typography, Row, DatePicker } from "antd";
import { useAppConfig } from "@/containers/AppConfigContainer";
import { ReloadOutlined } from "@ant-design/icons";
import { useDayGainers } from "@/hooks/gainers";
import Login from "@/components/Login";
import { useEffect, useState } from "react";
import moment from "moment";
import "./Main.less";

const { Title } = Typography;

const Main = () => {
  const { darkMode, toggleDarkMode, logged } = useAppConfig();
  const { run, loading, data } = useDayGainers();
  const [pagination, setPagination] = useState({ page: 1, pageSize: 50 });
  const [date, setDate] = useState(moment());

  const loadData = () =>
    run({
      day: date.format("YYYY/MM/D"),
      offset: (pagination.page - 1) * pagination.pageSize,
      limit: pagination.pageSize,
    });

  useEffect(() => {
    if (logged) {
      loadData();
    }
  }, [logged, date, pagination]);

  if (!logged) return <Login />;

  return (
    <div className="main">
      <Card
        title="Main Card -- Gainers"
        extra={[
          <Row
            justify="space-between"
            align="middle"
            style={{ minWidth: 400 }}
            key="row"
          >
            <DatePicker
              value={date}
              onChange={(value) => setDate(value || moment())}
              disabledDate={(current) =>
                current && current > moment().endOf("day")
              }
            />
            <Button
              key="reload-button"
              icon={<ReloadOutlined spin={loading} />}
              type="link"
              style={{ marginRight: 10 }}
              onClick={loadData}
            />
            <Title level={5} style={{ marginRight: -15, marginBottom: 0 }}>
              Dark Mode:
            </Title>
            <Switch checked={darkMode} onChange={toggleDarkMode} />
          </Row>,
        ]}
        className="card"
      >
        <Table
          dataSource={data?.data || []}
          rowKey={(record) => record.timestamp}
          loading={loading}
          size="large"
          sticky
          pagination={{
            pageSize: pagination.pageSize,
            total: data?.total || pagination.pageSize,
            onChange: (page, pageSize) => setPagination({ page, pageSize }),
          }}
          columns={[
            { title: "symbol", dataIndex: "symbol", key: "symbol" },
            { title: "price", dataIndex: "price", key: "price" },
            {
              title: "% changeRatio",
              dataIndex: "changeRatio",
              key: "changeRatio",
              render: (ratio: number) => <span>{ratio * 100}</span>,
            },
            { title: "volume", dataIndex: "volume", key: "volume" },
            { title: "rankType", dataIndex: "rankType", key: "rankType" },
            {
              title: "timestamp",
              dataIndex: "timestamp",
              key: "timestamp",
              render: (timestamp: number) =>
                moment.unix(timestamp).format("YYYY-MM-D, HH:mm:ss.SSS"),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Main;
