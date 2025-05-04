import {
	SignedIn,
	SignedOut,
	SignInButton,
	RedirectToSignIn,
	AuthenticateWithRedirectCallback,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/dashboard"
					element={
						<>
							<SignedIn>
								<Dashboard />
							</SignedIn>
							<SignedOut>
								<RedirectToSignIn />
							</SignedOut>
						</>
					}
				/>
				<Route
					path="/sign-in/*"
					element={
						<div className="sign-in-container">
							<SignInButton mode="modal" />
						</div>
					}
				/>
				<Route
					path="/sign-in-callback"
					element={<AuthenticateWithRedirectCallback />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
