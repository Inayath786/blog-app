import React from "react";

const RussiaUkraineWar = () => {
  const container = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "40px",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    color: "#f5f5f5",
    lineHeight: "1.7",
    minHeight: "100vh",
  };

  const title = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#ffffff",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  };

  const subtitle = {
    fontSize: "1.8rem",
    marginTop: "30px",
    color: "#ffd369",
  };

  const paragraph = {
    fontSize: "1.1rem",
    marginTop: "10px",
    color: "#f5f5f5",
  };

  const highlight = {
    backgroundColor: "#ffd369",
    color: "#2c2c2c",
    padding: "2px 6px",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  const bullet = {
    marginTop: "10px",
    paddingLeft: "20px",
  };

  return (
    <div style={container}>
      <h1 style={title}>🕊️ Russia-Ukraine War: Timeline & Global Impacts</h1>

      <h2 style={subtitle}>📜 Background</h2>
      <p style={paragraph}>
        The Russia-Ukraine war began in 2014 with the annexation of Crimea and
        escalated dramatically in <span style={highlight}>February 2022</span>
        when Russia launched a full-scale invasion of Ukraine. This conflict is
        one of the largest in Europe since World War II.
      </p>

      <h2 style={subtitle}>📆 Major Events Timeline</h2>
      <ul style={bullet}>
        <li><strong>Feb 24, 2022:</strong> Russia invades Ukraine from north, south, and east.</li>
        <li><strong>March 2022:</strong> Heavy fighting in Mariupol, Kharkiv, and Kyiv outskirts.</li>
        <li><strong>April 2022:</strong> Russian troops retreat from Kyiv; war shifts to Donbas.</li>
        <li><strong>Sept 2022:</strong> Ukraine recaptures Kharkiv region in surprise counter-offensive.</li>
        <li><strong>Oct 2022:</strong> Russia bombs critical infrastructure across Ukraine.</li>
        <li><strong>2023:</strong> War enters stalemate with attrition tactics and global tensions rising.</li>
        <li><strong>2024–2025:</strong> Talks of peace continue as NATO support and sanctions intensify.</li>
      </ul>

      <h2 style={subtitle}>🌍 Global Impacts</h2>
      <ul style={bullet}>
        <li><strong>🌾 Food Crisis:</strong> Ukraine and Russia are major wheat exporters. The war disrupted global food chains, especially in Africa and Asia.</li>
        <li><strong>⚡ Energy Shock:</strong> Europe faced gas shortages due to dependence on Russian pipelines, leading to surging energy prices.</li>
        <li><strong>📈 Inflation:</strong> Fuel and food inflation worsened globally, triggering central banks to hike interest rates.</li>
        <li><strong>🛡️ NATO Expansion:</strong> Finland and Sweden moved to join NATO, increasing regional tensions.</li>
        <li><strong>💰 Economic Sanctions:</strong> Russia faced unprecedented sanctions, freezing over $300B in assets and isolating its economy.</li>
        <li><strong>🧍 Refugee Crisis:</strong> Over 8 million Ukrainians displaced, causing humanitarian strains across Europe.</li>
      </ul>

      <h2 style={subtitle}>🔍 Key Takeaways</h2>
      <ul style={bullet}>
        <li><span style={highlight}>Cyber Warfare:</span> Both sides have used hacking as a war tool, targeting power grids and banking.</li>
        <li><span style={highlight}>Nuclear Tensions:</span> Russia’s control of nuclear plants like Zaporizhzhia raised global alarms.</li>
        <li><span style={highlight}>Drones & Modern Warfare:</span> Drones, AI surveillance, and satellite imaging are widely deployed.</li>
        <li><span style={highlight}>Media Propaganda:</span> A global information war across social media platforms is ongoing.</li>
      </ul>

      <h2 style={subtitle}>🛤️ Future Outlook</h2>
      <p style={paragraph}>
        With no clear end in sight, the war is shaping a new world order.
        Countries are reassessing security, supply chains, and alliances. The
        conflict serves as a case study in the importance of diplomacy,
        resilience, and strategic foresight in international relations.
      </p>

      <p style={paragraph}>
        🌐 As the war evolves, so does its effect on the geopolitical and
        economic fabric of our planet.
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

export default RussiaUkraineWar;
