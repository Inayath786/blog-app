function NewsletterSignup() {
  return (
    <div style={{ padding: "2rem", background: "#f4f4f4", borderRadius: "10px" }}>
      <h3>📬 Subscribe to My Newsletter</h3>
      <p>A curious mind with a passion for decoding how money really works. I’m not here to give boring textbook theories.
Instead, I break down real-world money systems, expose hidden truths in banking, and show how you can take control of your financial future — one idea at a time.

Whether you're a student, a young earner, or just financially curious, this space is for you.</p>
      <iframe
        src="https://financialadvicer.substack.com/embed"
        width="480"
        height="320"
        style={{ border: "1px solid #EEE", background: "white" }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to Financial Adviser"
      ></iframe>
    </div>
  );
}
export default NewsletterSignup
