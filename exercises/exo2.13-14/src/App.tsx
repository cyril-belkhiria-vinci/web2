import { useEffect, useState } from "react";

type JokeResponse = {
  category: string;
  type: "single";
  joke: string;
};

const App = () => {
  const [joke, setJoke] = useState<JokeResponse | null>(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur Fetch : ${res.status}`);
        }
        return res.json();
      })
      .then((data: JokeResponse) => {
        setJoke(data);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch :", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>JokeAPI – Exercice 2.13</h1>

      {!joke && <p>Chargement...</p>}

      {joke && (
        <div>
          <h2>Catégorie : {joke.category}</h2>
          <p>{joke.joke}</p>
        </div>
      )}
    </div>
  );
};

export default App;