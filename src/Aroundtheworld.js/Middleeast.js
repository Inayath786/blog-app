import React from "react";

const MiddleEastConflict = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "40px",
      background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      color: "#f5f5f5",
      lineHeight: "1.7",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2.8rem",
      textAlign: "center",
      marginBottom: "30px",
      color: "#ffffff",
      textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
    },
    subtitle: {
      fontSize: "1.8rem",
      marginTop: "30px",
      color: "#ffcc70",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginTop: "10px",
      color: "#f5f5f5",
    },
    highlight: {
      backgroundColor: "#ffcc70",
      color: "#1a1a1a",
      padding: "2px 6px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    bullet: {
      marginTop: "10px",
      paddingLeft: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 Middle East Conflict: A Complex Web of History, Religion & Politics</h1>

      <h2 style={styles.subtitle}>🕰️ Historical Roots</h2>
      <p style={styles.paragraph}>
        The Middle East's conflicts trace back centuries, rooted in
        <span style={styles.highlight}> colonialism, religion, and ethnic divisions</span>. After the fall of the Ottoman Empire,
        Western powers redrew borders with little regard for ethnic and tribal lines,
        seeding instability.
      </p>

      <h2 style={styles.subtitle}>⚔️ Major Ongoing Conflicts</h2>
      <ul style={styles.bullet}>
        <li><strong>🇮🇱 Israel-Palestine:</strong> A decades-long dispute over land, sovereignty, and rights.</li>
        <li><strong>🇸🇾 Syrian Civil War:</strong> A multi-sided war involving the Assad regime, rebels, ISIS, and foreign powers.</li>
        <li><strong>🇾🇪 Yemen Crisis:</strong> A humanitarian disaster fueled by civil war and proxy conflicts.</li>
        <li><strong>🇮🇷 Iran vs. Saudi Arabia:</strong> A regional rivalry over Shia vs Sunni influence across the Muslim world.</li>
        <li><strong>🇮🇶 Iraq Instability:</strong> Power vacuums post-Saddam led to insurgencies, sectarian strife, and ISIS.</li>
      </ul>

      <h2 style={styles.subtitle}>🌐 Proxy Wars & Global Involvement</h2>
      <p style={styles.paragraph}>
        Global powers like the <span style={styles.highlight}>U.S., Russia, Iran, and Turkey</span> play huge roles, often supporting opposing factions.
        The Middle East is a chessboard for geopolitics, with oil, ideology, and influence at stake.
      </p>

      <h2 style={styles.subtitle}>💥 Humanitarian Fallout</h2>
      <ul style={styles.bullet}>
        <li>Over <span style={styles.highlight}>30 million displaced</span> due to war and persecution.</li>
        <li>Widespread famine and lack of medical aid in Yemen, Syria, and Gaza.</li>
        <li>Psychological trauma and a lost generation of children.</li>
      </ul>

      <h2 style={styles.subtitle}>🔍 Why It’s So Complex</h2>
      <ul style={styles.bullet}>
        <li>Religious divides: <strong>Sunni vs Shia</strong> tensions.</li>
        <li>Ethnic diversity: Arabs, Kurds, Jews, Persians, and Turks.</li>
        <li>Border disputes, water conflicts, and foreign military presence.</li>
        <li>Deep mistrust due to historical betrayals and external interference.</li>
      </ul>

      <h2 style={styles.subtitle}>🛤️ Road Ahead</h2>
      <p style={styles.paragraph}>
        Peace remains elusive, but <span style={styles.highlight}>regional diplomacy</span> is gaining traction. Abraham Accords, ceasefires,
        and reconstruction plans offer glimmers of hope, but solutions must be rooted in justice,
        recognition, and collaboration.
      </p>

      <p style={styles.paragraph}>
        🌟 Understanding the complexity is the first step toward peace.
      </p>
    </div>
  );
};

export default MiddleEastConflict;
