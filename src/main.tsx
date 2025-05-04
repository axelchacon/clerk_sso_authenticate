import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ClerkProvider
			publishableKey={PUBLISHABLE_KEY}
			signInUrl="/sign-in"
			signInFallbackRedirectUrl="/dashboard"
			signUpFallbackRedirectUrl="/dashboard"
			afterSignOutUrl="/" // Configuración global para después de cerrar sesión
			afterMultiSessionSingleSignOutUrl="/" // Configuración global para multi-sesión
		>
			<App />
		</ClerkProvider>
	</React.StrictMode>
);
