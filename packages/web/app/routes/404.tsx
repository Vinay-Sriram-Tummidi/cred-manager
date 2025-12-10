export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ 
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        marginTop: "20px"
      }}>
        Back to Home
      </a>
    </div>
  );
}
