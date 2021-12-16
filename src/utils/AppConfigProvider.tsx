import { ConfigProvider, Switch } from "antd";
import { FC } from "react";
import "../theme/global.less";
import "../theme/dark.less";
import "../theme/light.less";
import {
  useAppConfig,
  withConfigContainer,
} from "@/containers/AppConfigContainer";

const AppConfigProvider: FC = ({ children }) => {
  const { theme } = useAppConfig();

  return <ConfigProvider prefixCls={theme}>{children}</ConfigProvider>;
};

export default withConfigContainer(AppConfigProvider);
