import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const { user } = useUser();
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
			<h1>Dashboard</h1>
			<p>Welcome, {user?.firstName}!</p>
			<p>Email: {user?.emailAddresses[0]?.emailAddress}</p>

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
					onClick={() => navigate("/")}
					style={{
						padding: "0.75rem 1.5rem",
						backgroundColor: "#4285f4",
						color: "white",
						border: "none",
						borderRadius: "8px",
						cursor: "pointer",
					}}>
					Go to Home
				</button>
			</div>
		</div>
	);
}
