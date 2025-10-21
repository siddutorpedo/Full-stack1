// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "../styles/branchSelection.css";

export default function Home() {
  const navigate = useNavigate();

  const branches = [
    { name: "BCA", color: "#3b82f6" },
    { name: "BCOM", color: "#10b981" },
    { name: "BA", color: "#8b5cf6" },
  ];

  return (
    <div className="home-wrapper">
      <div className="header-section">
        <h1 className="main-title">Attendance System</h1>
        <p className="subtitle">Select your branch to continue</p>
      </div>

      <div className="branch-wrapper">
        {branches.map((branch) => (
          <div
            key={branch.name}
            className="branch-box"
            style={{ backgroundColor: branch.color }}
            onClick={() => navigate(`/year/${branch.name}`)}
          >
            <span className="branch-text">{branch.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
