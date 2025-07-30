import React from "react";

function EMIBlog() {
  const containerStyle = {
    padding: "50px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#00ffff",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  };

  const subheadingStyle = {
    fontSize: "1.6rem",
    color: "#ffd700",
    marginTop: "30px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#f0f0f0",
    marginTop: "10px",
    textAlign: "justify",
  };

  const bulletStyle = {
    marginTop: "10px",
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>💳 Why Big Brands *Beg* You to Buy on EMI (Even If You Can Afford It)</h1>

      <h2 style={subheadingStyle}>🧠 Introduction</h2>
      <p style={paragraphStyle}>
        "0% EMI available!" — sounds like a great deal, right?  
        But behind every EMI offer lies a financial trap engineered to stretch your spending, hijack your future income, and disguise debt as convenience.
      </p>

      <h2 style={subheadingStyle}>🧮 How the EMI Game Really Works</h2>
      <p style={paragraphStyle}>
        Brands and banks have created an illusion of affordability. Here's the secret: you're not just a buyer — you're the product. Your cash flow is the target.
      </p>
      <ul style={bulletStyle}>
        <li>🏷️ Brands offer 2–8% of product cost to banks for enabling EMI.</li>
        <li>🏦 Banks pay the brand upfront — they already got their profit.</li>
        <li>💳 You repay the bank monthly, with **processing fees**, **GST**, and risk of **penalties**.</li>
        <li>📈 You end up paying more than MRP — even in "0% interest" schemes.</li>
      </ul>

      <h2 style={subheadingStyle}>🕵️‍♂️ The Psychology of EMI</h2>
      <ul style={bulletStyle}>
        <li>🧠 Humans hate losing large amounts in one go — EMI spreads the pain.</li>
        <li>💸 EMI changes our perception of affordability — ₹2,999/month seems cheap for a ₹75,000 phone.</li>
        <li>🔁 We start normalizing debt and continue the cycle with upgrades and new EMIs.</li>
      </ul>

      <h2 style={subheadingStyle}>📉 Hidden Charges That Drain You</h2>
      <ul style={bulletStyle}>
        <li>⚠️ Processing fees (₹200–₹1000)</li>
        <li>⚠️ GST on fees (18%)</li>
        <li>⚠️ Insurance bundles, extended warranty</li>
        <li>⚠️ Missed EMI penalties (just like a credit card!)</li>
      </ul>

      <p style={paragraphStyle}>
        Over a 6- or 12-month EMI, these charges silently make you pay **₹1,000–₹5,000 extra** for the same product.
      </p>

      <h2 style={subheadingStyle}>🔁 Why Brands LOVE EMI</h2>
      <ul style={bulletStyle}>
        <li>🔹 Customers buy higher-priced items</li>
        <li>🔹 Emotional lock-in — you’re less likely to switch brands</li>
        <li>🔹 Predictable customer behavior = easier targeting</li>
        <li>🔹 Faster inventory turnover & bank partnerships = instant profit</li>
      </ul>

      <h2 style={subheadingStyle}>🔮 Long-Term Impact of EMI Culture</h2>
      <ul style={bulletStyle}>
        <li>💰 Limits your investment capacity</li>
        <li>🧠 Builds impulsive money habits</li>
        <li>📉 Weakens your credit if mismanaged</li>
        <li>🔗 Chains your income to past decisions</li>
      </ul>

      <h2 style={subheadingStyle}>✅ When Should You Actually Use EMI?</h2>
      <ul style={bulletStyle}>
        <li>🚨 For emergencies (health, essential appliances)</li>
        <li>📚 For upskilling (education, certifications)</li>
        <li>💼 For income-generating assets (laptop, tools)</li>
      </ul>

      <p style={paragraphStyle}>
        Avoid EMI for **phones, clothes, luxury items, or travel.**  
        If you can’t afford it, delay the desire — not your future.
      </p>

      <h2 style={subheadingStyle}>🧭 Final Thoughts</h2>
      <p style={paragraphStyle}>
        Brands want you to think short-term.  
        Banks want your income booked before you even earn it.  
        But *you* can choose differently.
      </p>
      <p style={paragraphStyle}>
        <strong>Buy with clarity. Spend with freedom. Avoid EMI unless it earns or saves you more.</strong>
      </p>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://www.buymeacoffee.com/inayath"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#00ffcc",
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
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
           ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  );
}

export default EMIBlog;
