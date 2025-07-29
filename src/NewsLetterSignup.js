import React from "react";

function NewsletterSignup() {
  return (
    <div className="newsletter-container">
      <h3>📬 Subscribe to My Newsletter</h3>
      <p>
        A curious mind with a passion for decoding how money really works. I’m not here to give boring textbook theories.
        Instead, I break down real-world money systems, expose hidden truths in banking, and show how you can take control of your financial future — one idea at a time.
        Whether you're a student, a young earner, or just financially curious, this space is for you.
      </p>
      <iframe
        src="https://financialadvicer.substack.com/embed"
        title="Subscribe to Financial Adviser"
        className="newsletter-iframe"
        frameBorder="0"
        scrolling="no"
      ></iframe>

      <style>{`
        .newsletter-container {
          padding: 2rem;
          background: #f4f4f4;
          border-radius: 10px;
          margin: 0 auto;
          max-width: 800px;
          box-sizing: border-box;
        }
        .newsletter-container h3 {
          margin-top: 0;
          text-align: center;
          color: #333;
        }
        .newsletter-container p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          text-align: justify;
        }
        .newsletter-iframe {
          display: block;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 480 / 320; /* maintains 480:320 ratio */
          border: 1px solid #eee;
          background: white;
          margin: 1.5rem auto 0;
        }
        /* Responsive tweaks for small screens */
        @media (max-width: 600px) {
          .newsletter-container {
            padding: 1rem;
          }
          .newsletter-container p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default NewsletterSignup;
