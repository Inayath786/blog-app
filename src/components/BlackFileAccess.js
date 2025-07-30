import { Link } from "react-router-dom";

function BlackFileAccess() {
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
      <h2 style={headingStyle}>🚀 Dark Secrets You never Know</h2>

      <div style={linkContainerStyle}>
        <Link
          to="/blackfile/patterns"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Spending through UPI leave Patterns valuable than Passwords
        </Link>

        <Link
          to="/blackfile/bankdeposits"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Why Banks Limit Your Cash Deposits?
        </Link>

        <Link
          to="/blackfile/richbanks"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Why Rich doesnt use Banks and what they do instead
        </Link>

        <Link
          to="/blackfile/zerotaxes"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Rich borrow Millions without Paying any Taxes How?
        </Link>

        <Link
          to="/blackfile/creditcharges"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         UPI is Free Credit Card Charges. But who gains?
        </Link>

         <Link
          to="/blackfile/emicharges"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         Why Big Brands Beg you to buy on EMI?
        </Link>
      </div>
    </div>
  );
}

export default BlackFileAccess;
