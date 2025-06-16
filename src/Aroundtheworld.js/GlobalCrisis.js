import React from "react";

function GlobalCrisis() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #f9f9f9, #e0eafc)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2c3e50",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#0d47a1",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
  };

  const subheadingStyle = {
    fontSize: "1.8rem",
    color: "#37474f",
    marginTop: "30px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  const quoteStyle = {
    fontStyle: "italic",
    color: "#607d8b",
    borderLeft: "4px solid #0d47a1",
    paddingLeft: "15px",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🌍 Global Food & Energy Crisis Explained</h1>

      <p style={paragraphStyle}>
        In recent years, the world has faced a dual crisis in two of the most fundamental sectors: food and energy.
        Triggered by war, pandemics, climate change, and economic instability, this crisis threatens global stability,
        health, and development.
      </p>

      <h2 style={subheadingStyle}>🔥 Why Energy Crisis?</h2>
      <p style={paragraphStyle}>
        The global energy crisis was worsened by the Russia-Ukraine war. Russia, being a major supplier of gas and oil to Europe,
        reduced exports, sending prices skyrocketing. Meanwhile, global recovery from COVID-19 led to sudden surges in demand.
      </p>
      <ul style={{ ...paragraphStyle, paddingLeft: "20px" }}>
        <li><strong>Gas Shortages:</strong> Europe scrambled for alternatives, pushing up global prices.</li>
        <li><strong>Oil Price Shocks:</strong> Prices reached over $120/barrel at the peak.</li>
        <li><strong>Electricity Costs:</strong> Households and industries faced massive power bills worldwide.</li>
        <li><strong>Coal & Nuclear Comebacks:</strong> Nations reconsidered old energy sources due to urgency.</li>
      </ul>

      <h2 style={subheadingStyle}>🍞 The Food Crisis</h2>
      <p style={paragraphStyle}>
        The food crisis is deeply interconnected with conflict and climate change. Ukraine and Russia together account for
        over 30% of global wheat exports. Blockades, sanctions, and war disrupted this supply chain, pushing millions into hunger.
      </p>
      <p style={paragraphStyle}>
        Additionally, extreme weather events—droughts, floods, and heatwaves—have reduced agricultural productivity
        in Africa, Asia, and the Americas.
      </p>

      <h2 style={subheadingStyle}>📈 Consequences of the Crisis</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: "20px" }}>
        <li><strong>Hunger:</strong> Over 345 million people are facing acute food insecurity (as per WFP).</li>
        <li><strong>Inflation:</strong> Food and fuel prices are the main contributors to global inflation.</li>
        <li><strong>Protests:</strong> Several nations saw riots due to shortages and price hikes (e.g., Sri Lanka, Haiti).</li>
        <li><strong>Debt:</strong> Many developing nations borrowed heavily to subsidize fuel/food, worsening economic health.</li>
      </ul>

      <p style={quoteStyle}>
        "The world is just one shock away from a full-blown food crisis." – UN Food Chief (2023)
      </p>

      <h2 style={subheadingStyle}>🌱 Hope & Recovery</h2>
      <p style={paragraphStyle}>
        The crisis has prompted nations to rethink sustainability and security. There’s a renewed push toward:
      </p>
      <ul style={{ ...paragraphStyle, paddingLeft: "20px" }}>
        <li><strong>Renewable Energy:</strong> Countries are scaling solar, wind, and hydrogen tech.</li>
        <li><strong>Agri-Innovation:</strong> Climate-resistant crops, precision farming, and vertical agriculture.</li>
        <li><strong>Strategic Reserves:</strong> Governments building food & fuel buffers for emergencies.</li>
        <li><strong>Global Cooperation:</strong> Efforts like the Black Sea Grain Initiative are critical in restoring supply chains.</li>
      </ul>

      <h2 style={subheadingStyle}>🔮 What’s Next?</h2>
      <p style={paragraphStyle}>
        Long-term resilience will depend on investing in local food systems, clean energy, and reducing geopolitical risks.
        While the worst may be behind us, the world remains vulnerable without unified action.
      </p>
    </div>
  );
}

export default GlobalCrisis;
