import React from "react";

function HistoryOfIndianCinema() {
  const container = {
    padding: "40px",
    background: "linear-gradient(to right, #1f1c2c, #928dab)",
    color: "#f0f0f0",
    fontFamily: "'Segoe UI', sans-serif",
    lineHeight: "1.7",
    minHeight: "100vh"
  };

  const heading = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#ffd700",
    textShadow: "2px 2px 8px rgba(255, 215, 0, 0.6)"
  };

  const subheading = {
    fontSize: "1.8rem",
    marginTop: "35px",
    color: "#ffdf80"
  };

  const paragraph = {
    fontSize: "1.1rem",
    marginTop: "10px",
    color: "#e8e8e8"
  };

  const quote = {
    fontStyle: "italic",
    color: "#ccc",
    borderLeft: "4px solid #ffd700",
    paddingLeft: "15px",
    margin: "20px 0"
  };

  const timeline = {
    backgroundColor: "#2c2c2c",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  };

  return (
    <div style={container}>
      <h1 style={heading}>🎞️ History of Indian Cinema: From Silent Reels to Streaming Screens</h1>

      <p style={paragraph}>
        Indian cinema, known globally for its grandeur, diversity, and storytelling, has journeyed from black-and-white
        silent films to becoming the largest film-producing industry in the world. Let’s travel through time and uncover
        how cinema became India's cultural heartbeat.
      </p>

      <h2 style={subheading}>🎬 The Silent Era (1913–1930)</h2>
      <p style={paragraph}>
        The story begins with <strong>Dadasaheb Phalke</strong>, often called the Father of Indian Cinema, who made
        <strong> Raja Harishchandra (1913)</strong> — India’s first full-length feature film. Though silent, it
        sparked a cultural revolution.
      </p>

      <div style={quote}>
        "Phalke didn't just make a movie; he created a movement."
      </div>

      <h2 style={subheading}>🎤 Talkies & Golden Age (1931–1960)</h2>
      <p style={paragraph}>
        <strong>Alam Ara (1931)</strong> marked the arrival of sound in Indian cinema. Soon, films like *Devdas* and *Achhut Kanya*
        touched on social issues. In the 1950s, India entered a Golden Age with visionary directors like <strong>Satyajit Ray</strong>
        (*Pather Panchali*) and <strong>Raj Kapoor</strong> (*Shree 420*), gaining global recognition.
      </p>

      <h2 style={subheading}>🎵 Masala, Music, and Magnificence (1960s–1980s)</h2>
      <p style={paragraph}>
        Bollywood embraced color, dance, and drama. The era saw legends like <strong>Amitabh Bachchan, Lata Mangeshkar, Kishore Kumar</strong>,
        and filmmakers like <strong>Yash Chopra</strong>. Themes of family, love, revenge, and nationalism dominated.
      </p>

      <h2 style={subheading}>🛑 Censorship, Parallel Cinema & Political Influence</h2>
      <p style={paragraph}>
        Alongside mainstream cinema, a movement called *Parallel Cinema* emerged. With films like <em>Ankur</em> and <em>Manthan</em>,
        it tackled real-world problems. But censorship tightened during the Emergency (1975-77), limiting bold storytelling.
      </p>

      <h2 style={subheading}>💻 Liberalisation & Rise of Multiplex (1990s–2000s)</h2>
      <p style={paragraph}>
        Economic reforms opened India’s doors to global markets. With it came bigger budgets, new themes, and international appeal.
        Movies like <em>Lagaan</em>, <em>DDLJ</em>, and <em>Swades</em> found both commercial and critical success.
        Multiplexes changed viewing habits, giving space to indie films too.
      </p>

      <h2 style={subheading}>📱 Streaming & The New Era (2010s–Present)</h2>
      <p style={paragraph}>
        Platforms like Netflix, Amazon Prime, and Hotstar revolutionized content delivery. Movies like <em>Gully Boy</em>,
        <em>Article 15</em>, <em>The Kashmir Files</em>, and <em>RRR</em> reflect a mix of commercial appeal and bold narratives.
        Regional cinema—Tamil, Telugu, Malayalam, Marathi—is now shaping global cinema culture.
      </p>

      <div style={timeline}>
        <h3 style={{ color: "#ffd700" }}>📽️ Timeline Snapshot</h3>
        <ul style={{ color: "#eee", lineHeight: "1.8", marginLeft: "20px" }}>
          <li><strong>1913:</strong> Raja Harishchandra (Silent Film)</li>
          <li><strong>1931:</strong> Alam Ara (First Talkie)</li>
          <li><strong>1955:</strong> Pather Panchali (Satyajit Ray)</li>
          <li><strong>1975:</strong> Sholay – a box office phenomenon</li>
          <li><strong>1995:</strong> DDLJ – longest running film</li>
          <li><strong>2001:</strong> Lagaan nominated for Oscars</li>
          <li><strong>2018–2024:</strong> Streaming boom, Pan-India films, Oscars for RRR song “Naatu Naatu”</li>
        </ul>
      </div>

      <h2 style={subheading}>🌍 Impact of Indian Cinema</h2>
      <ul style={{ color: "#f0f0f0", marginLeft: "20px", lineHeight: "1.7" }}>
        <li>Influences fashion, politics, and public opinion</li>
        <li>Promotes Indian culture globally</li>
        <li>Drives tourism and soft power diplomacy</li>
        <li>Creates employment for millions</li>
      </ul>

      <div style={quote}>
        "Indian cinema is not just an industry. It's a reflection of our society, dreams, and evolution."
      </div>
    </div>
  );
}

export default HistoryOfIndianCinema;
