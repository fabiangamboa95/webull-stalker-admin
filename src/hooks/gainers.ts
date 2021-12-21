import { useRequest } from "ahooks";
import { notification } from "antd";

const host = "http://70.231.80.204:5000";

export const useGainers = () =>
  useRequest(
    ({ limit, offset }: { limit?: number; offset?: number } = {}) =>
      fetch(
        `${host}/gainers${
          limit || offset
            ? `?${limit ? `limit=${limit}&` : ""}${
                offset ? `offset=${offset}` : ""
              }`
            : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            key: "FWbfGbhJXrW3Ollh+yoDPtqYLc6sAZsONd1u0FijJHGcjtzR",
          },
        }
      ).then((res) => res.json()),
    {
      manual: true,
      onSuccess: () => notification.success({ message: "Gainers loaded" }),
      onError: () => notification.error({ message: "Gainers failed to load" }),
    }
  );

export const useDayGainers = () =>
  useRequest(
    ({
      limit,
      offset,
      day,
    }: {
      limit?: number;
      offset?: number;
      day?: string;
    } = {}) =>
      fetch(
        `${host}/day-gainers${
          limit || offset || day
            ? `?${limit ? `limit=${limit}&` : ""}${
                offset ? `offset=${offset}&` : ""
              }${day ? `day=${day}` : ""}`
            : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            key: "FWbfGbhJXrW3Ollh+yoDPtqYLc6sAZsONd1u0FijJHGcjtzR",
          },
        }
      ).then((res) => res.json())
  );
