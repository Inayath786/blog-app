import { Link } from "react-router-dom";

function Environment() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #56ab2f, #a8e063)", // green gradient
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
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
    background: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    width: "fit-content",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  };

  const linkHoverStyle = {
    ...linkStyle,
    background: "#fff",
    color: "#2d572c",
    transform: "scale(1.05)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🌿 Environment Hub – Read Eco-Inspiring Blogs</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/environment/climate-crisis"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌎 Climate Crisis Explained
        </Link>

        <Link
          to="/environment/urbanpollution"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          💨 Urban Pollution: Impact & Solutions
        </Link>

        <Link
          to="/environment/forest"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌲 Forest Conservation Efforts
        </Link>

        <Link
          to="/environment/green"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          🌱 10 Simple Ways to Go Green
        </Link>
      </div>
    </div>
  );
}

export default Environment;
