import { FC } from "react";
import { useBoolean } from "ahooks";
import { createContainer } from "unstated-next";

const AppConfigContainer = createContainer(() => {
  const [darkMode, { toggle: toggleDarkMode }] = useBoolean(true);
  const [siderCollapsed, { toggle: toggleSiderCollapsed }] = useBoolean(true);

  return {
    theme: darkMode ? "dark" : "light",
    darkMode,
    toggleDarkMode,
    siderCollapsed,
    toggleSiderCollapsed,
  };
});

export const useAppConfig = AppConfigContainer.useContainer;
export const withConfigContainer = (Component: FC) => (props: any) =>
  (
    <AppConfigContainer.Provider>
      <Component {...props} />
    </AppConfigContainer.Provider>
  );
