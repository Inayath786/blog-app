import React, { useEffect } from 'react';

const CreditCharges = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec, i) => {
      setTimeout(() => {
        sec.classList.add('visible');
      }, 200 * i);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>How the Financial System Is Designed to Control You — But the Rich Escape It</h1>

      <section className="section" style={{ ...styles.section, ...styles.hidden }}>
        <h2 style={styles.heading}>Why UPI is Free, but Credit Cards Have Charges</h2>
        <p style={styles.paragraph}>
          Ever wondered why UPI is free, but credit card payments come with charges? Because the system wants you cashless,
          but not interest-free.
        </p>
        <p style={styles.paragraph}>
          <strong>UPI</strong> is instant, free, and traceable. It benefits the <strong>government</strong> for visibility and
          the <strong>banks</strong> for data control.
        </p>
        <p style={styles.paragraph}>
          <strong>Credit cards</strong> are loans disguised as convenience. They benefit banks and networks through:
          <ul>
            <li>Merchant fees</li>
            <li>Late payment interest</li>
            <li>Reward manipulation</li>
          </ul>
        </p>
        <p style={styles.paragraph}>
          UPI is a tool to move masses toward digital compliance. Credit is the trap to keep people in lifelong debt cycles.
        </p>
        <p style={styles.warning}>
          You're not getting UPI for free out of kindness. You're being onboarded into a system of surveillance & subtle debt control.
        </p>
        <p style={styles.paragraph}>
          And once cash is gone, there's no way out.
        </p>
      </section>

      <section className="section" style={{ ...styles.section, ...styles.hidden }}>
        <h2 style={styles.heading}>How the Rich Borrow Millions and Pay 0% Tax</h2>
        <p style={styles.paragraph}>
          You were taught to fear debt, worship savings, and beg for tax refunds.
        </p>
        <p style={styles.paragraph}>
          But the 1%? They <strong>weaponize debt</strong> to escape the tax matrix—legally.
        </p>
        <p style={styles.paragraph}>
          You pay 30% on every rupee you earn. They pay 0% on millions. How?
        </p>
      </section>

      <section className="section" style={{ ...styles.section, ...styles.hidden }}>
        <h3 style={styles.subheading}>1. Borrow, Don’t Sell</h3>
        <p style={styles.paragraph}>
          Selling triggers tax. Borrowing is invisible. They take million-dollar loans against assets and live tax-free.
          No income = no tax. That’s called <strong>debt-financed luxury</strong>.
        </p>
        <h3 style={styles.subheading}>2. Appreciate and Re-Leverage</h3>
        <p style={styles.paragraph}>
          You hope your home value grows. The rich make sure their real estate appreciates, then refinance it. They pull
          out crores—still owning the asset. No sale = No capital gains = No tax.
        </p>
        <h3 style={styles.subheading}>3. Interest = Legal Disguise</h3>
        <p style={styles.paragraph}>
          The interest on their loans? Becomes a tax deduction. While you struggle to pay EMI, their EMI becomes a
          <strong> tax shield</strong>.
        </p>
        <h3 style={styles.subheading}>4. Use Entities, Not Personal Names</h3>
        <p style={styles.paragraph}>
          They don't buy under their own names. They use <strong>LLCs, Trusts, and Shells</strong>. Entities borrow. Entities deduct.
          Entities die, but wealth doesn’t. It passes through generations.
        </p>
        <h3 style={styles.subheading}>5. The Infinite Money Loop</h3>
        <p style={styles.paragraph}>
          <strong>Borrow → Reinvest → Deduct → Repeat.</strong> They don’t earn. They engineer cash flow.
        </p>
        <p style={styles.warning}>
          This isn’t tax evasion. This is legal power disguised as paperwork. You weren’t supposed to know it.
        </p>
      </section>

      <p style={{ ...styles.footer, marginTop: '50px' }}>
        💡 Start understanding the system. Or keep playing in a game rigged against you.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px 20px',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    color: '#222',
    lineHeight: '1.7',
  },
  title: {
    fontSize: '34px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '26px',
    color: '#111',
    borderBottom: '2px solid #ccc',
    paddingBottom: '8px',
    marginBottom: '15px',
  },
  subheading: {
    fontSize: '20px',
    color: '#444',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '16px',
  },
  warning: {
    backgroundColor: '#fff3cd',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '16px',
    color: '#856404',
    marginTop: '20px',
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#444',
  },
  section: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.6s ease-out',
    marginBottom: '30px',
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
};

// Animation: when 'visible' class is added via JS, it overrides hidden
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleTag);

export default CreditCharges;
