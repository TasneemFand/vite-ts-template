import React from "react";
import "@src/index.css";
import { ReactRouterProvider } from "@providers/ReactRouterProvider";
import { ReactQueryProvider } from "@providers/ReactQueryProvider";

export const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  );
};
