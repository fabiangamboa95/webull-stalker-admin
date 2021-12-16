import { Button, Card, Table, Switch, Typography, Row } from "antd";
import { useAppConfig } from "@/containers/AppConfigContainer";
import { ReloadOutlined } from "@ant-design/icons";
import "./Main.less";

const { Title } = Typography;

const Main = () => {
  const { darkMode, toggleDarkMode } = useAppConfig();
  const loading = true;

  return (
    <div className="main">
      <Card
        title="Main Card -- Gainers"
        extra={[
          <Row
            justify="space-between"
            align="middle"
            style={{ width: 200 }}
            key="row"
          >
            <Button
              key="reload-button"
              icon={<ReloadOutlined spin={loading} />}
              type="link"
              style={{ marginRight: 10 }}
              // onClick={reload}
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
          size="large"
          columns={[
            { title: "timestamp", dataIndex: "timestamp", key: "timestamp" },
            {
              title: "latestUpdateTime",
              dataIndex: "latestUpdateTime",
              key: "latestUpdateTime",
            },
            { title: "symbol", dataIndex: "symbol", key: "symbol" },
            { title: "price", dataIndex: "price", key: "price" },
            { title: "volume", dataIndex: "volume", key: "volume" },
            { title: "changeRatio", dataIndex: "changeRatio", key: "changeRatio" },
          ]}
        />
      </Card>
    </div>
  );
};

export default Main;
