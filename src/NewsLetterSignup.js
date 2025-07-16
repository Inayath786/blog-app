function NewsletterSignup() {
  return (
    <div style={{ padding: "2rem", background: "#f4f4f4", borderRadius: "10px" }}>
      <h3>📬 Subscribe to My Newsletter</h3>
      <p>Get weekly system design insights, dev tips, and finance hacks!</p>
      <iframe
        src="https://inayath1.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "1px solid #ccc", background: "white" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
export default NewsletterSignup
