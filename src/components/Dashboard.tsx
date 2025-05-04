import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const { user } = useUser();
	const navigate = useNavigate();

	return (
		<div className="dashboard-container">
			<h1>Dashboard</h1>
			<p>Welcome, {user?.firstName}!</p>
			<p>Email: {user?.emailAddresses[0]?.emailAddress}</p>

			<div className="user-section">
				<UserButton
					showName={true}
					afterSignOutUrl="/"
					afterSwitchSessionUrl="/dashboard"
				/>
				<button onClick={() => navigate("/")}>Go to Home</button>
			</div>
		</div>
	);
}
