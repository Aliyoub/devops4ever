export default function HomePage() {
    return (
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Dockerize a React App
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
          Visualisation des étapes de la mise en conteneur Docker.
        </p>
        <Scene />
      </main>
    );
  }