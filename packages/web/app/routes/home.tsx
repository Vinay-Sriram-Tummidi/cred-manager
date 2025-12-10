export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>SmartCloud Banking Platform</h1>
      <p>A modern monorepo-based banking dashboard</p>
      <a href="/dashboard" style={{ 
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        marginTop: "20px"
      }}>
        Go to Dashboard
      </a>
    </div>
  );
}
