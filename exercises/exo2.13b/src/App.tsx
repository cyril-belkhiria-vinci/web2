import { useState } from "react";
import RandomDog from "./RandomDog";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshDogs = () => {
    setRefreshKey((key) => key + 1);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dog API – Exercice 2.13b</h1>

      <button
        onClick={refreshDogs}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Refresh
      </button>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <RandomDog key={refreshKey + "-1"} />
        <RandomDog key={refreshKey + "-2"} />
        <RandomDog key={refreshKey + "-3"} />
      </div>
    </div>
  );
};

export default App;