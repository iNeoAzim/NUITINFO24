

export default function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", background: "#333", color: "#fff", padding: "10px 20px", zIndex: 1000 }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0, padding: 0 }}>
        <li><a href="#section1" style={{ color: "#fff", textDecoration: "none" }}>Section 1</a></li>
        <li><a href="#section2" style={{ color: "#fff", textDecoration: "none" }}>Section 2</a></li>
        <li><a href="#section3" style={{ color: "#fff", textDecoration: "none" }}>Section 3</a></li>
      </ul>
    </nav>
  );
};
