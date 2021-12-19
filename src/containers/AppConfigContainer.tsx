import { FC } from "react";
import { useBoolean } from "ahooks";
import { createContainer } from "unstated-next";

const AppConfigContainer = createContainer(() => {
  const [darkMode, { toggle: toggleDarkMode }] = useBoolean(true);
  const [siderCollapsed, { toggle: toggleSiderCollapsed }] = useBoolean(true);
  const [logged, { setTrue: login, setFalse: logout }] = useBoolean(false);

  return {
    theme: darkMode ? "dark" : "light",
    darkMode,
    toggleDarkMode,
    siderCollapsed,
    toggleSiderCollapsed,
    logged,
    login,
    logout,
  };
});

export const useAppConfig = AppConfigContainer.useContainer;
export const withConfigContainer = (Component: FC) => (props: any) =>
  (
    <AppConfigContainer.Provider>
      <Component {...props} />
    </AppConfigContainer.Provider>
  );
