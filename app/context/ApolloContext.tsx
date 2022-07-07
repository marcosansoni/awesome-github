import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createContext } from "react";

const isBrowser = typeof window !== "undefined";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const initialState: NormalizedCacheObject = isBrowser
  ? window.__INITIAL_STATE__
  : {};

export const initApollo = ({
  endpoint,
  token,
  ssrMode = true,
}: {
  endpoint?: string;
  token?: string;
  ssrMode?: boolean;
}) => {
  return new ApolloClient({
    uri: endpoint,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache().restore(initialState),
    ssrMode,
  });
};

export default createContext(initialState);
