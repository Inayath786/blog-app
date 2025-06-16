import React from "react";

const IconicDialogues = () => {
  const dialogues = [
    {
      id: 1,
      movie: "Sholay (1975)",
      line: "Kitne aadmi the?",
      actor: "Amjad Khan (as Gabbar Singh)",
    },
    {
      id: 2,
      movie: "Deewaar (1975)",
      line: "Mere paas maa hai.",
      actor: "Shashi Kapoor",
    },
    {
      id: 3,
      movie: "Don (1978)",
      line: "Don ko pakadna mushkil hi nahin, namumkin hai.",
      actor: "Amitabh Bachchan",
    },
    {
      id: 4,
      movie: "Dilwale Dulhania Le Jayenge (1995)",
      line: "Bade bade deshon mein aisi choti choti baatein hoti rehti hain.",
      actor: "Shah Rukh Khan",
    },
    {
      id: 5,
      movie: "Gangs of Wasseypur (2012)",
      line: "Tumse na ho payega.",
      actor: "Richa Chadha",
    },
    {
      id: 6,
      movie: "Wanted (2009)",
      line: "Ek baar jo maine commitment kar di, uske baad toh main khud ki bhi nahi sunta.",
      actor: "Salman Khan",
    },
    {
      id: 7,
      movie: "Agneepath (1990)",
      line: "Vijay Dinanath Chauhan. Poora naam. Baap ka naam Dinanath Chauhan. Maa ka naam Suhasini Chauhan.",
      actor: "Amitabh Bachchan",
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Iconic Dialogues That Changed Bollywood</h1>
      <p style={styles.subtitle}>
        These legendary lines have echoed through generations and defined Indian cinema.
      </p>

      <div style={styles.cardContainer}>
        {dialogues.map((d) => (
          <div key={d.id} style={styles.card}>
            <p style={styles.dialogue}>“{d.line}”</p>
            <p style={styles.meta}><strong>{d.actor}</strong> in <em>{d.movie}</em></p>
          </div>
        ))}
      </div>

      <p style={styles.footer}>
        📝 These dialogues not only captivated audiences but also became part of pop culture. Bollywood’s power lies in storytelling — and nothing tells a story like a great line.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#c0392b",
    textAlign: "center"
  },
  subtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#555",
    marginBottom: "30px"
  },
  cardContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
    borderLeft: "6px solid #e74c3c",
    transition: "transform 0.3s ease",
    cursor: "default"
  },
  dialogue: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#2c3e50"
  },
  meta: {
    marginTop: "10px",
    color: "#777"
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "1rem",
    color: "#555"
  }
};

export default IconicDialogues;
