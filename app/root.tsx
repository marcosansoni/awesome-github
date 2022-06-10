import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { json } from "@remix-run/node";
import { ApolloProvider } from "@apollo/client";
import fonts from "../public/styles/fonts.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { initApollo } from "./context/ApolloContext";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  {
    rel: "stylesheet",
    href: fonts,
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "awesome GitHub",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  return json({
    token: process.env.GITHUB_API_TOKEN,
    endpoint: process.env.GRAPHQL_ENDPOINT,
  });
};

export default function App() {
  const { token, endpoint } = useLoaderData<Record<string, string>>();
  const client = initApollo({ endpoint, token, ssrMode: false });

  return (
    <html lang="en" className="h-full font-sans text-gray-120">
      <head>
        <title>awesome-github</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ApolloProvider client={client}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ApolloProvider>
      </body>
    </html>
  );
}
