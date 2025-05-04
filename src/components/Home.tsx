import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				textAlign: "center",
				padding: "2rem",
			}}>
			<h1>Welcome to Clerk Auth Demo</h1>

			<SignedOut>
				<div
					style={{
						margin: "2rem 0",
						width: "100%",
						maxWidth: "400px",
					}}>
					<SignIn
						appearance={{
							elements: {
								rootBox: {
									width: "100%",
								},
								card: {
									boxShadow: "none",
									width: "100%",
									backgroundColor: "transparent",
								},
								socialButtonsBlock: {
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
								},
							},
						}}
					/>
				</div>
			</SignedOut>

			<SignedIn>
				<div
					style={{
						margin: "2rem 0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
					}}>
					<UserButton afterSwitchSessionUrl="/dashboard" />
					<button
						onClick={() => navigate("/dashboard")}
						style={{
							padding: "0.75rem 1.5rem",
							backgroundColor: "#4285f4",
							color: "white",
							border: "none",
							borderRadius: "8px",
							cursor: "pointer",
						}}>
						Go to Dashboard
					</button>
				</div>
			</SignedIn>
		</div>
	);
}
