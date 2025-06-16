import { Link } from "react-router-dom";

function Systemdesign() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#f4f4f4",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
  };

  const linkContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const linkStyle = {
    padding: "14px 26px",
    fontSize: "1.1rem",
    background: "rgba(255,255,255,0.05)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "fit-content",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  };

  const linkHoverStyle = {
    ...linkStyle,
    background: "#ffffff",
    color: "#0f2027",
    transform: "scale(1.05)",
    fontWeight: "bold",
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
      <h2 style={headingStyle}>🛠️ System Design Concepts & Architecture</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/systemdesign/scaling"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          📈 How Systems Scale: Horizontal vs Vertical
        </Link>

        <Link
          to="/systemdesign/loadbalancers"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          ⚖️ Load Balancers Explained with Diagrams
        </Link>

        <Link
          to="/systemdesign/caching"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🚀 Caching Techniques for Speed Optimization
        </Link>

        <Link
          to="/systemdesign/microservices"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🧩 Monolith vs Microservices Architecture
        </Link>
      </div>
    </div>
  );
}

export default Systemdesign;
