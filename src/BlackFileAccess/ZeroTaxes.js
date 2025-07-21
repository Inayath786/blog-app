import React from 'react';

const ZeroTaxes = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>💸 How the Rich Borrow Millions and Pay ₹0 in Taxes</h1>
      <p style={styles.intro}>
        Most of us were taught to:
        <br />
        ✅ Save a lot <br />
        ❌ Stay away from debt <br />
        🧾 Always pay taxes
        <br /><br />
        But the ultra-wealthy play a different game.
        They:
        <br />
        💡 Use debt smartly <br />
        🏦 Save very little <br />
        🧾 Pay almost zero in taxes — **legally**
      </p>

      <div style={styles.section}>
        <h2>1️⃣ Borrow Instead of Selling</h2>
        <p>
          Selling your home, stocks, or business means you have to pay tax on the profit.
          <br /><br />
          The rich don’t sell. They **borrow money** using their property or business as security.
          <br /><br />
          🏠 Have a ₹10 crore home? Borrow ₹7 crores from the bank. 
          <br />
          ✅ You get cash. ❌ You don’t pay tax.
        </p>
      </div>

      <div style={styles.section}>
        <h2>2️⃣ Let Assets Grow and Re-Borrow</h2>
        <p>
          Their homes, land, or companies grow in value over time.
          <br /><br />
          Instead of selling, they go back to the bank and say: "My property is now worth more — give me a bigger loan."
          <br /><br />
          🔁 They get more money. Still, no taxes. Still own the asset.
        </p>
      </div>

      <div style={styles.section}>
        <h2>3️⃣ Turn Loan Interest Into Tax Deductions</h2>
        <p>
          When they pay loan interest, they don’t treat it as a loss — they write it off on taxes.
          <br /><br />
          ✍️ Interest becomes a legal expense that lowers their tax.
          <br />
          That’s how a big loan turns into a tax benefit!
        </p>
      </div>

      <div style={styles.section}>
        <h2>4️⃣ Use Companies and Trusts</h2>
        <p>
          Rich people don’t buy things like cars or homes in their own name.
          <br /><br />
          They create **LLCs, Trusts, or Offshore Companies**.
          <br />
          These can:
          <ul>
            <li>Borrow money</li>
            <li>Own property</li>
            <li>Reduce taxes</li>
            <li>Pass wealth to kids legally</li>
          </ul>
          🧬 These entities don’t die — they protect money across generations.
        </p>
      </div>

      <div style={styles.section}>
        <h2>5️⃣ The Infinite Money Loop</h2>
        <p>
          Here's their strategy:
          <br /><br />
          ➡️ Borrow money → 💼 Reinvest in assets → ✍️ Deduct loan interest → 🔁 Repeat
          <br /><br />
          The money keeps flowing in.
          <br />
          The tax stays at ₹0.
        </p>
      </div>

      <div style={styles.conclusion}>
        <h2>🔐 What You Weren’t Taught</h2>
        <p>
          While most people:
          <br />
          💰 Save for years <br />
          🧾 Pay 30% tax <br />
          ❌ Avoid loans
          <br /><br />
          The rich:
          <br />
          💵 Live tax-free <br />
          💳 Borrow millions <br />
          🧠 Use legal hacks
          <br /><br />
          They don’t earn like us — they **engineer money** using smart rules.
          <br />
          Now that you know this, will you keep saving... or start playing smart?
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f9ff',
    color: '#1a1a1a',
    padding: '30px',
    lineHeight: '1.7',
    animation: 'fadeIn 1s ease-in',
    maxWidth: '900px',
    margin: 'auto',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  heading: {
    color: '#0070f3',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  intro: {
    fontSize: '1.1rem',
    background: '#e6f4ff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    borderLeft: '6px solid #00aaff',
  },
  section: {
    marginBottom: '30px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
  },
  conclusion: {
    backgroundColor: '#d1e7dd',
    padding: '25px',
    borderRadius: '12px',
    color: '#0f5132',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderLeft: '6px solid #198754',
  },
};

// Keyframes for fade-in effect (add to your global CSS or inject dynamically if needed)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
*/

export default ZeroTaxes;
