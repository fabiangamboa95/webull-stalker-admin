import { Form, Input, Button, Checkbox, Card } from "antd";
import "./Login.less";
import md5 from "crypto-js/md5";
import { useAppConfig } from "@/containers/AppConfigContainer";

const nameHash = "64437b12f04e6dcb072b5538ece9cd50";
const passHash = "161ebd7d45089b3446ee4e0d86dbcf92";

const Login = () => {
  const { login } = useAppConfig();

  const onFinish = (values: any) => {
    const nameHashCheck = md5(values.username).toString();
    const passHashCheck = md5(values.password).toString();
    if (nameHashCheck === nameHash && passHashCheck === passHash) {
      login();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card className="login-card">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
