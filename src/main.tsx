import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { Routes } from "./routes/index.tsx";
import "@fontsource-variable/raleway";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
);
