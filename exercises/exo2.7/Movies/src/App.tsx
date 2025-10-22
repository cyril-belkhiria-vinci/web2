import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import './App.css'
import type { Movie } from './types';

const MovieFav : Movie[] =[
  {
    titre : "20th Century Girl",
    director : "Bang Woo-Ri",
    dureeMinute : 119,
    image : "https://image.tmdb.org/t/p/original/od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
    description : "En 1999, Bo Ra, une lycéenne de 17 ans brillante et positive, surveille de près un camarade d'école pour le compte de sa meilleure amie, Yeon Du, folle de lui, avant d'être emportée dans une histoire d'amour bien à elle."
  },
  {
    titre : "Dead Poets Society",
    director : "peter Weir",
    dureeMinute : 130,
    image :"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11671_p_v8_ad.jpg",
    description :"Todd Anderson, un garçon plutôt timide, est envoyé dans la prestigieuse académie de Welton, réputée pour être l'une des plus fermées et austères des États-Unis, là où son frère avait connu de brillantes études. C'est dans cette université qu'il va faire la rencontre d'un professeur de lettres anglaises plutôt étrange, M. Keating, qui les encourage à toujours refuser l'ordre établi. Les cours de M. Keating vont bouleverser la vie de l'étudiant réservé et de ses amis."
  },
  {
    titre : "Fate/Stay Night : Heaven's Feel III. Spring Song",
    director :"Tomonori Sudo",
    dureeMinute :120,
    image:"https://upload.wikimedia.org/wikipedia/en/3/33/SpringSongPoster.jpg"
  },
  {
    titre : " Dune: Part Two",
    director : "Denis Villeneuve",
    dureeMinute : 167,
    image : "https://aesthetealley.com/wp-content/uploads/2024/04/51ZMaTI7rL._AC_UF8941000_QL80_.jpg"
  },
  {
    titre : "Harry Potter Et Le Prince De Sang-Mélée",
    director : "David Yates",
    dureeMinute : 153,
    image : "https://www.mediatheque.be/fichiers/60/d9/6f/cover_vh0413_scale_500x500.jpg"
  },
  {
    titre :"Le Comte De Monte-Cristo",
    director : "Alexendre De La Patellière",
    dureeMinute : 178 ,
    image : "https://fr.web.img6.acsta.net/img/29/eb/29eb8341475fdb0b19b1d7b995b70e17.jpg"
  }
];

const App = () => {
  const[titre,setTitre] = useState("");
  const[director, setDirector] = useState("");
  const[dureeMinute, setDureeMinute] = useState(0);
  const[image, setImage] = useState<string|undefined>("");
  const[description, setDescription] = useState<string|undefined>("");
  const[budget, setBudget] = useState<number | undefined>(undefined);
  const[movie,setMovie] = useState(MovieFav);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!titre || !director || !dureeMinute) {
      alert("Les champs titre, réalisateur et durée sont obligatoires.");
      return;
    }

    const newMovie: Movie = {
      titre,
      director,
      dureeMinute,
      image,
      description,
      budget
    };

    setMovie([...movie, newMovie]);
    
    setTitre("");
    setDirector("");
    setDureeMinute(0);
    setImage("");
    setDescription("");
    setBudget(undefined);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎬 Mes Films Préférés</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movie.map((movie, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
            {movie.image && (
              <img
                src={movie.image}
                alt={movie.titre}
                style={{ width: '100%', height: 'auto', marginBottom: '0.5rem' }}
              />
            )}
            <h3>{movie.titre}</h3>
            <p><strong>Réalisateur:</strong> {movie.director}</p>
            <p><strong>Durée:</strong> {movie.dureeMinute} minutes</p>
            {movie.description && <p>{movie.description}</p>}
            {movie.budget !== undefined && <p><strong>Budget:</strong> {movie.budget} M</p>}
          </div>
        ))}
      </div>

      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
        <input type="text" placeholder="Réalisateur" value={director} onChange={(e) => setDirector(e.target.value)} required />
        <input type="number" placeholder="Durée (en minutes)" value={dureeMinute || ""} onChange={(e) => setDureeMinute(Number(e.target.value))} required />
        <input type="text" placeholder="Image (URL, optionnel)" value={image || ""} onChange={(e) => setImage(e.target.value)} />
        <textarea placeholder="Description (optionnelle)" value={description || ""} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Budget (en million, optionnel)" value={budget ?? ""} onChange={(e) => {
          const val = e.target.value;
          setBudget(val === "" ? undefined : Number(val));
        }} />
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
};

export default App;
