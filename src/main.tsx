import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthWrapper from "./AuthWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        {(user) => <App user={user} />}
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
