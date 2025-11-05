import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import './App.css'
import type { Movie } from './types';
import { Outlet, useNavigate } from "react-router-dom";
import PageTitle from './components/PageTitle';
import Cinema from './components/Cinema';
import Header from './components/Header';
import Footer from './components/Footer';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movies")}>My films</button>
    </nav>
  );
};


const HomePage = () => <p>Home Page</p>;

const CinemaPage = () => {


  const headerLogoUrl ="https://plus.unsplash.com/premium_photo-1672116453000-c31b150f48ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

  const footerLogoUrl ="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

    const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
    },
  ];

  
  return (
    <div>
      <Header logoUrl={headerLogoUrl}>
        <h1>Bienvenue au cinéma !</h1>
      </Header>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer logoUrl={footerLogoUrl}>
        <h2>Mon Footer</h2>
      </Footer>
    </div>
  );
};

const MovieListPage = () => {

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
    director : "Peter Weir",
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
  },
  {
    titre :"Chainsaw Man - The Movie: Reze Arc",
    director : "Tatsuya Yoshihara",
    dureeMinute : 100 ,
    image : "https://cdn.kinepolis.be/images/BE/65459BAD-CA99-4711-A97B-E049A5FA94D2/HO00012497/0000031188/Chainsaw_Man_-_Le_Film_:_LArc_de_Reze.jpg"
  }
];

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

const App = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default App;
export {HomePage,CinemaPage,MovieListPage}
