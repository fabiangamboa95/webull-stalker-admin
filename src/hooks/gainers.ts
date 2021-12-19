import { useRequest } from "ahooks";
import { notification } from "antd";

const host = "http://70.231.80.204:5000/gainers";

export const useGainers = () =>
  useRequest(
    ({ limit }: { limit?: number } = {}) =>
      fetch(`${host}${limit ? `?limit=${limit}` : ""}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          key: "FWbfGbhJXrW3Ollh+yoDPtqYLc6sAZsONd1u0FijJHGcjtzR",
        },
      }).then((res) => res.json()),
    {
      manual: true,
      onSuccess: () => notification.success({ message: "Gainers loaded" }),
      onError: () => notification.error({ message: "Gainers failed to load" }),
    }
  );
