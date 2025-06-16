import { Link } from "react-router-dom";
import { useState } from "react";

function Main() {
  const [originalNiches] = useState([
    { id: 1, text: "Cinema", status: "Pending" },
    { id: 2, text: "System_design", status: "Pending" },
    { id: 3, text: "Environment", status: "Pending" },
    { id: 4, text: "AroundtheWorld", status: "Pending" },
     { id: 4, text: "Indian_Projects", status: "Pending" }
  ]);

  const [Niches, setNiches] = useState(originalNiches);
  const [search, setSearch] = useState("");

  const searched = (search) => {
    if (search.trim() === "") {
      alert("Please enter some niche to search");
      setNiches(originalNiches);
      return;
    }
    const updated = originalNiches.filter((niche) =>
      niche.text.toLowerCase().includes(search.toLowerCase())
    );
    setNiches(updated);
    setSearch("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Welcome to the Blogs Page</h1>

      {/* Navigation Bar */}
  

// inside return(...)

<nav style={styles.nav}>
  <ul style={styles.navList}>
    <li style={styles.navItem}>
      <Link to="/home" style={styles.navLink}>Home</Link>
    </li>
    <li style={styles.navItem}>
      <Link to="/categories" style={styles.navLink}>Categories</Link>
    </li>
    <li style={styles.navItem}>
      <Link to="/products" style={styles.navLink}>Products</Link>
    </li>
    <li style={styles.navItem}>
      <Link to="/about" style={styles.navLink}>About</Link>
    </li>
  </ul>
</nav>


      {/* Search Section */}
      <div style={styles.searchSection}>
        <input
          type="search"
          placeholder="🔍 Search the blog you want..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
        <button onClick={() => searched(search)} style={styles.searchButton}>Search</button>
      </div>

      {/* Niche Selection */}
      <h3 style={styles.subheading}>✨ Select a Niche for Your Blogs</h3>
      <div style={styles.nicheContainer}>
        {Niches.map((niche) => (
          <Link
            key={niche.id}
            to={`./${niche.text.toLowerCase().replace("_", "")}`}
            style={styles.nicheCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {niche.text.replace("_", " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "30px",
    textAlign: "center",
    background: "linear-gradient(to right, #f4f4f4, #e6f7ff)",
    minHeight: "100vh"
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "bold"
  },
  nav: {
    backgroundColor: "#1e1e2f",
    padding: "12px 0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px"
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  navItem: {
    margin: "0 20px"
  },
  navLink: {
    color: "white",
    fontSize: "1.1rem",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
    cursor: "pointer"
  },
  searchSection: {
    margin: "30px 0"
  },
  searchInput: {
    padding: "12px 20px",
    width: "300px",
    borderRadius: "25px",
    border: "1px solid #aaa",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s ease-in-out",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  searchButton: {
    padding: "12px 25px",
    borderRadius: "25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "12px",
    transition: "background-color 0.3s ease"
  },
  subheading: {
    fontSize: "1.6rem",
    marginTop: "40px",
    color: "#34495e"
  },
  nicheContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px"
  },
  nicheCard: {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    padding: "18px 30px",
    textDecoration: "none",
    boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
    fontSize: "1.2rem",
    color: "#2c3e50",
    fontWeight: "500",
    transition: "all 0.3s ease-in-out",
    minWidth: "160px",
    transform: "scale(1)"
  }
};

export default Main;
