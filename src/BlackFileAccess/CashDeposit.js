import React from 'react';

const CashDepositBlog = () => {
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '960px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fefefe',
    borderRadius: '15px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    lineHeight: '1.8',
    color: '#333',
  };

  const headingStyle = {
    color: '#1a1a1a',
    fontSize: '36px',
    marginBottom: '25px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const sectionTitle = {
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#005792',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const paragraphStyle = {
    fontSize: '17px',
    marginBottom: '15px',
  };

  const highlightBox = {
    backgroundColor: '#eaf7ff',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '20px',
    border: '1px solid #b3e0f7',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  };

  const thStyle = {
    border: '1px solid #ccc',
    padding: '12px',
    backgroundColor: '#d1ecf1',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ccc',
    padding: '12px',
    backgroundColor: '#f8f9fa',
  };

  const icon = (emoji) => (
    <span style={{ fontSize: '22px' }}>{emoji}</span>
  );

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>💸 Why Do Banks Limit Cash Deposits?</h1>

      <p style={paragraphStyle}>
        Banks often claim it's to <strong>"prevent fraud"</strong> or <strong>"stop money laundering."</strong>  
        <br />But what if the real reason is deeper? <strong>It's about control, surveillance, and shifting to a cashless system.</strong>
      </p>

      <h2 style={sectionTitle}>{icon('🚩')}1. You're Flagged for Too Much Cash</h2>
      <p style={paragraphStyle}>
        Large cash deposits trigger internal algorithms. Even if it’s your own hard-earned money, your bank starts reporting.
      </p>

      <h2 style={sectionTitle}>{icon('🕵️')}2. You're Guilty Until Proven Innocent</h2>
      <p style={paragraphStyle}>
        Expect questions and possibly a tax notice. The system presumes you’re laundering until you explain yourself.
      </p>

      <h2 style={sectionTitle}>{icon('💰')}3. Banks Don’t Want You to Save Cash</h2>
      <p style={paragraphStyle}>
        Cash = freedom. That’s why there are deposit limits, extra charges, and suspicion. Digital money is easier to <strong>freeze, trace, and tax.</strong>
      </p>

      <h2 style={sectionTitle}>{icon('🏦')}4. Bank Runs Terrify Banks</h2>
      <p style={paragraphStyle}>
        Banks only hold a fraction of the deposited money. Too many withdrawals or deposits at once? The system shakes. That’s why they subtly discourage high-volume cash activity.
      </p>

      <h2 style={sectionTitle}>{icon('🔒')}5. Cash = Freedom. And Freedom = Threat</h2>
      <p style={paragraphStyle}>
        Cash is <strong>private and untraceable.</strong> That’s why there's a push for cashless systems: full oversight, full control.
      </p>

      <div style={highlightBox}>
        <h3>{icon('🌍')} Country Rules on Cash Deposits</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>🇮🇳 India</td>
              <td style={tdStyle}>₹10 lakh/year+ cash deposits flagged to Income Tax</td>
            </tr>
            <tr>
              <td style={tdStyle}>🇺🇸 USA</td>
              <td style={tdStyle}>$10,000+ in one transaction must be reported (CTR)</td>
            </tr>
            <tr>
              <td style={tdStyle}>🇬🇧 UK</td>
              <td style={tdStyle}>Frequent unexplained cash deposits can trigger AML review</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={sectionTitle}>{icon('🔍')} A Deeper Look: Why the Limits?</h2>

      <h3 style={sectionTitle}>{icon('🚫')} Preventing Money Laundering</h3>
      <p style={paragraphStyle}>
        Cash is anonymous. Criminals use it to fund illicit activity. AML laws force banks to report large or suspicious deposits.
        In India, ₹10 lakh+ in one year is enough to raise red flags.
      </p>

      <h3 style={sectionTitle}>{icon('🧾')} Enforcing Tax Compliance</h3>
      <p style={paragraphStyle}>
        Tax authorities compare deposits to declared income. Even a ₹2 lakh deposit without PAN can alert authorities.
        Splitting deposits across accounts ("structuring") is also illegal.
      </p>

      <h3 style={sectionTitle}>{icon('📉')} Curbing Black Money</h3>
      <p style={paragraphStyle}>
        Post-demonetization, India cracked down on cash hoarding. Governments encourage digital payments to ensure transparency and taxation.
      </p>

      <h3 style={sectionTitle}>{icon('🛠️')} Operational Burden on Banks</h3>
      <p style={paragraphStyle}>
        Handling physical cash costs banks manpower, security, and insurance. That’s why deposit caps and fees exist — especially on savings accounts.
      </p>

      <h3 style={sectionTitle}>{icon('⚙️')} Digital Banking Push</h3>
      <p style={paragraphStyle}>
        Digital transactions (UPI, NEFT, IMPS) are faster, cheaper, and fully traceable. Banks are incentivized by regulators to push these systems.
      </p>

      <p style={{ marginTop: '40px', fontWeight: 'bold', textAlign: 'center', fontSize: '18px', color: '#111' }}>
        💡 <em>The more control they gain over your money, the less control you have.</em>
        <br />
        <span style={{ fontSize: '16px', color: '#555' }}>Understand the system. Don’t sleep on your financial freedom.</span>
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
};

export default CashDepositBlog;
