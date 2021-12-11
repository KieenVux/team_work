import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/user";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
