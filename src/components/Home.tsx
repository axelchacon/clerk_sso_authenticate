import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home-container">
			<h1>Welcome to Clerk Auth Demo</h1>

			<SignedOut>
				<SignInButton mode="modal" />
			</SignedOut>

			<SignedIn>
				<div className="auth-section">
					<UserButton showName={true} afterSwitchSessionUrl="/dashboard" />
					<button onClick={() => navigate("/dashboard")}>
						Go to Dashboard
					</button>
				</div>
			</SignedIn>
		</div>
	);
}
