import React from "react";

const GoGreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌿 10 Ways to Go Green</h1>
      <p style={styles.intro}>
        Adopting a green lifestyle is one of the best things you can do for our planet. Whether it’s reducing waste, conserving energy, or choosing sustainable products — every action counts. Here are 10 simple yet powerful ways you can go green today.
      </p>

      <ol style={styles.list}>
        <li>
          <strong>💡 Switch to LED Bulbs:</strong> Save energy and reduce electricity bills.
        </li>
        <li>
          <strong>🚲 Use Public Transport or Bike:</strong> Reduce your carbon footprint by minimizing car use.
        </li>
        <li>
          <strong>♻️ Recycle and Reuse:</strong> Sort your waste, reuse containers, and support recycled products.
        </li>
        <li>
          <strong>🚿 Take Shorter Showers:</strong> Conserve water — one of the planet’s most precious resources.
        </li>
        <li>
          <strong>🌱 Plant a Tree:</strong> Offset CO₂ emissions and contribute to reforestation.
        </li>
        <li>
          <strong>📦 Choose Eco-Friendly Packaging:</strong> Say no to single-use plastic and opt for biodegradable materials.
        </li>
        <li>
          <strong>🛍️ Bring Your Own Bags:</strong> Carry cloth or jute bags instead of using plastic while shopping.
        </li>
        <li>
          <strong>🔌 Unplug Devices When Not in Use:</strong> Reduce phantom energy loss and save power.
        </li>
        <li>
          <strong>🥦 Eat More Plant-Based Foods:</strong> Lower greenhouse gas emissions by reducing meat consumption.
        </li>
        <li>
          <strong>🧼 Use Natural Cleaners:</strong> Avoid toxic chemicals by switching to eco-friendly cleaning products.
        </li>
      </ol>

      <p style={styles.closing}>
        🌍 Small changes can create a big impact. Start with one habit, and soon you’ll be living a greener, cleaner life — helping the planet thrive for generations to come.
      </p>
       {/* Add a coffee button if you want */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://www.buymeacoffee.com/inayath"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#FFDD00",
            color: "#000",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to top right, #e8fce8, #ffffff)",
    padding: "40px",
    maxWidth: "920px",
    margin: "40px auto",
    borderRadius: "16px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#2e7d32",
  },
  title: {
    fontSize: "2.6rem",
    color: "#1b5e20",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
  },
  intro: {
    fontSize: "1.2rem",
    color: "#33691e",
    marginBottom: "30px",
    textAlign: "center",
  },
  list: {
    fontSize: "1.1rem",
    color: "#33691e",
    paddingLeft: "20px",
    lineHeight: "2",
  },
  closing: {
    marginTop: "40px",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#1b5e20",
    textAlign: "center",
  },
};

export default GoGreen;
