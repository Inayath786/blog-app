import React from "react";

function DarkSecretsOfCinema() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #1c1c1c, #2e2e2e)",
    color: "#f5f5f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#ff4d4d",
    textShadow: "2px 2px 6px rgba(255, 0, 0, 0.4)",
  };

  const subheadingStyle = {
    fontSize: "1.8rem",
    color: "#ff8c8c",
    marginTop: "30px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#e0e0e0",
    marginBottom: "20px",
  };

  const quoteStyle = {
    fontStyle: "italic",
    color: "#c0c0c0",
    borderLeft: "4px solid #ff4d4d",
    paddingLeft: "15px",
    margin: "20px 0",
  };

  const listStyle = {
    paddingLeft: "20px",
    color: "#f0f0f0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🎬 Dark Secrets of Cinema: Behind the Silver Screen</h1>

      <p style={paragraphStyle}>
        Cinema dazzles us with glamour, art, and storytelling. But behind the flashing lights and Oscar moments lies
        a world filled with controversy, exploitation, power abuse, and deeply hidden truths. This article uncovers
        the darker corners of the film industry.
      </p>

      <h2 style={subheadingStyle}>🎭 Casting Couch & Exploitation</h2>
      <p style={paragraphStyle}>
        Many actors, especially women and newcomers, have faced the infamous “casting couch” culture. Power dynamics
        allow producers and directors to exploit vulnerable artists in exchange for roles. Movements like
        <strong> #MeToo</strong> have shed light on industry-wide abuse, from Hollywood to Bollywood.
      </p>

      <h2 style={subheadingStyle}>🎥 Control & Censorship</h2>
      <p style={paragraphStyle}>
        Films are often subject to harsh censorship, altering the truth or protecting political narratives.
        In countries like China, India, Iran, and even the US (during war times), filmmakers have had to cut,
        change, or completely halt their projects due to governmental or corporate pressure.
      </p>

      <p style={quoteStyle}>
        “In the film industry, censorship is not just about cutting scenes. It's about reshaping perspectives.” – Anonymous Filmmaker
      </p>

      <h2 style={subheadingStyle}>💸 Money Laundering & Mafia Involvement</h2>
      <p style={paragraphStyle}>
        Several investigations revealed the use of film production as a front for money laundering. In the 1990s and 2000s,
        the Indian film industry was notoriously linked with underworld figures financing films for profit and influence.
      </p>

      <h2 style={subheadingStyle}>📽️ Mental Health of Actors</h2>
      <p style={paragraphStyle}>
        Constant fame, trolling, invasive media, and immense pressure lead many actors to mental breakdowns. Several
        tragic deaths, like those of Heath Ledger, Sushant Singh Rajput, or Marilyn Monroe, point toward
        an unforgiving system that values profits over people.
      </p>

      <h2 style={subheadingStyle}>🔍 Rigged Awards & Nepotism</h2>
      <ul style={listStyle}>
        <li><strong>Awards:</strong> Many major awards are bought, lobbied for, or politically aligned.</li>
        <li><strong>Nepotism:</strong> Families dominate cinema in many countries, pushing out talented outsiders.</li>
        <li><strong>Favoritism:</strong> PR, image management, and internal politics often decide success.</li>
      </ul>

      <h2 style={subheadingStyle}>🕵️ Hidden Agendas in Films</h2>
      <p style={paragraphStyle}>
        Films are used to push ideologies—sometimes subtle, sometimes blatant. From normalizing violence or gender roles
        to promoting nationalism or religious bias, many movies are far from “just entertainment.”
      </p>

      <h2 style={subheadingStyle}>🌐 Global Examples of Hidden Truths</h2>
      <ul style={listStyle}>
        <li><strong>Hollywood:</strong> Blacklisting during the McCarthy era, and CIA influence in scripts.</li>
        <li><strong>Bollywood:</strong> Nexus with politics, and commercial vs. artistic war.</li>
        <li><strong>Korean Cinema:</strong> Allegations of secret surveillance and banning of anti-government films.</li>
      </ul>

      <p style={paragraphStyle}>
        Despite these dark truths, cinema remains a powerful tool for change, truth-telling, and resistance. Independent
        filmmakers, whistleblowers, and brave actors continue to push boundaries and bring these hidden realities to light.
      </p>

      <p style={quoteStyle}>
        “Cinema is truth at 24 frames per second. Unless someone edits the reel.” – Godard
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
}

export default DarkSecretsOfCinema;
