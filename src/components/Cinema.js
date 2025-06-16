import { Link } from "react-router-dom";

function Cinema() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
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
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "fit-content",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  };

  const linkHoverStyle = {
    ...linkStyle,
    background: "#fff",
    color: "#1f1c2c",
    transform: "scale(1.05)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
  };

  // Inline event approach for hover effect
  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🎬 Cinema Zone – Explore the Magic of Movies!</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/cinema/darksecrets"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🎭 Dark Secrets of Cinema
        </Link>

        <Link
          to="/cinema/history"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          📽️ History of Movies
        </Link>

        {/* Example placeholders (can later link or remove) */}
        <Link
          to="/cinema/topPerformance"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌟 Top 10 Performances in Indian Cinema
        </Link>

        <Link
          to="/cinema/iconicdialouges"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🔥 Iconic Dialogues That Changed Bollywood
        </Link>
      </div>
    </div>
  );
}

export default Cinema;
