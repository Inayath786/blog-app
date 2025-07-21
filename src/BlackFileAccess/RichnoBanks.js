import React from "react";

function RichnoBanks() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Why the Rich Don’t Use Banks Like You Do</h1>
      <p style={styles.intro}>
        The rich don’t trust banks the way you do — because they know something
        you don’t. While you're saving money, they’re using secret strategies to
        grow it faster and safer.
      </p>

      <h2 style={styles.heading}>The Secret? Banks Use <u>Your</u> Money to Get Rich — Not You</h2>

      <div style={styles.point}>
        <h3 style={styles.subheading}>1. Banks Pay You Pennies While They Make Millions</h3>
        <p>Banks offer 2–4% interest while lending your money at 10–20% returns. They profit. You don’t.</p>
      </div>

      <div style={styles.point}>
        <h3 style={styles.subheading}>2. Inflation Eats Your Savings</h3>
        <p>Money sitting in banks loses value due to inflation. The rich protect theirs by investing in assets that grow.</p>
      </div>

      <div style={styles.point}>
        <h3 style={styles.subheading}>3. Millionaires Invest Instead of Save</h3>
        <p>They put their money in real estate, businesses, stocks, crypto — things that appreciate in value over time.</p>
      </div>

      <div style={styles.point}>
        <h3 style={styles.subheading}>4. They Borrow Against Assets, Not Use Cash</h3>
        <p>They use loans backed by their assets to spend — so their cash keeps compounding instead of being used up.</p>
      </div>

      <div style={styles.point}>
        <h3 style={styles.subheading}>5. They Use Private Banking & Offshore Accounts</h3>
        <p>To minimize taxes and restrictions, the ultra-rich store wealth in private banks, tax havens, and family trusts.</p>
      </div>

      <div style={styles.point}>
        <h3 style={styles.subheading}>6. Banks Work for Themselves — Not You</h3>
        <p>Banks are structured to benefit themselves and the elite — not the average saver. The rich know this.</p>
      </div>

      <h2 style={styles.heading}>What Do the Rich Use Instead of Banks?</h2>

      <ul style={styles.list}>
        <li><strong>💰 Banks Are for Storing, Not Growing:</strong> They prefer real estate, stocks, hedge funds, VC, gold, etc.</li>
        <li><strong>🏦 Banks Limit Control:</strong> Large withdrawals are flagged. Rich use trusts, offshore banks, family offices.</li>
        <li><strong>🛡️ Not Fully Safe:</strong> Bank insurance is limited. The wealthy spread risk via assets and insurance instruments.</li>
        <li><strong>🧠 Customized Solutions:</strong> They use wealth managers, LLCs, tax engineers, and private advisors.</li>
        <li><strong>🌐 Privacy & Tax Efficiency:</strong> They use shell companies, crypto, trusts, and foreign real estate.</li>
      </ul>

      <h2 style={styles.heading}>Comparison Table</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Purpose</th>
            <th style={styles.th}>Average Person</th>
            <th style={styles.th}>The Rich</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Saving</td>
            <td style={styles.td}>Bank accounts</td>
            <td style={styles.td}>Real estate, life insurance, diversified assets</td>
          </tr>
          <tr>
            <td style={styles.td}>Transactions</td>
            <td style={styles.td}>Savings & Current accounts</td>
            <td style={styles.td}>Private banking, offshore accounts</td>
          </tr>
          <tr>
            <td style={styles.td}>Loans</td>
            <td style={styles.td}>Personal or Home loans</td>
            <td style={styles.td}>Borrowing against assets</td>
          </tr>
          <tr>
            <td style={styles.td}>Privacy</td>
            <td style={styles.td}>Normal accounts (tracked)</td>
            <td style={styles.td}>Trusts, LLCs, offshore entities</td>
          </tr>
          <tr>
            <td style={styles.td}>Investments</td>
            <td style={styles.td}>FDs, Mutual Funds</td>
            <td style={styles.td}>VC, PE, hedge funds, global assets</td>
          </tr>
        </tbody>
      </table>

      <p style={styles.outro}>
        <strong>Final Thought:</strong> The rich don’t avoid banks — they outgrow them. They use financial systems
        to build and protect wealth, while average people are told to “save in the bank.”
      </p>
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

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
    backgroundColor: "#fdfdfd",
    lineHeight: "1.8",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  intro: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  heading: {
    fontSize: "26px",
    marginTop: "30px",
    marginBottom: "15px",
    color: "#34495e",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "#2980b9",
  },
  point: {
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",
  },
  th: {
    backgroundColor: "#34495e",
    color: "white",
    padding: "12px",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
  td: {
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "left",
  },
  outro: {
    fontSize: "18px",
    fontWeight: "500",
    backgroundColor: "#ecf0f1",
    padding: "20px",
    borderRadius: "6px",
    color: "#2d3436",
  },
};

export default RichnoBanks;
