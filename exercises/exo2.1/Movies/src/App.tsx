import './App.css'
import PageTitle from './components/PageTitle';
import Cinema from './components/Cinema';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const headerLogoUrl ="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80";

  const footerLogoUrl ="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=100&q=80";

  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
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
        <p>Mon Footer</p>
      </Footer>
    </div>
  );
};

export default App;
