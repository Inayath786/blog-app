import { useEffect } from "react";

export default function NewsletterSignup() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://financialadvicer.substack.com/embed.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="substack-subscribe"
      data-embed="subscribe"
      style={{ marginTop: "20px" }}
    />
  );
}
