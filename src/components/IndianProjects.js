import { Link } from "react-router-dom";

function FutureProjects() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Futuristic blue gradient
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.6rem",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
    color: "#00e5ff",
  };

  const linkContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px",
  };

  const linkStyle = {
    padding: "15px 25px",
    fontSize: "1.2rem",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "fit-content",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  };

  const linkHoverStyle = {
    ...linkStyle,
    background: "#ffffff",
    color: "#0f2027",
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🚀 Future Projects of India – Shaping Tomorrow</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/india/future/vandebharat"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🚄 Vande Bharat Expansion Plan
        </Link>

        <Link
          to="/india/future/gagan"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🛰️ Gaganyaan – India's Human Spaceflight Mission
        </Link>

        <Link
          to="/india/future/semiconductorfab"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          💻 Semiconductor Manufacturing in India
        </Link>

        <Link
          to="/india/future/greenenergy"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌱 India’s Green Hydrogen & Solar Revolution
        </Link>

        <Link
          to="/india/future/infrastructure"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🏗️ Mega Infrastructure & Expressways
        </Link>
      </div>
    </div>
  );
}

export default FutureProjects;
