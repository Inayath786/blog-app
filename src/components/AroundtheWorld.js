import { Link } from "react-router-dom";

function AroundtheWorld() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #283e51, #485563)",
    color: "#f0f0f0",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
  };

  const linkContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const linkStyle = {
    padding: "15px 25px",
    fontSize: "1.2rem",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "fit-content",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  };

  const linkHoverStyle = {
    ...linkStyle,
    background: "#ffffff",
    color: "#283e51",
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🌍 Global Tensions – Understand the World's Most Critical Conflicts</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/global/russia-ukraine"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🇷🇺 Russia-Ukraine War: Timeline & Impacts
        </Link>

        <Link
          to="/global/middle-east"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🕊️ Middle East Conflict: A Complex Web
        </Link>

        <Link
          to="/global/us-china"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🇺🇸🇨🇳 US-China Trade War Explained
        </Link>

        <Link
          to="/global/energy-food-crisis"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌾 Global Food & Energy Crisis 2024
        </Link>
      </div>
    </div>
  );
}

export default AroundtheWorld;
