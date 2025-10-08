import './App.css'

interface Movie {
  title : string,
  director : string;
}

interface PageTitleProps {
  title : string;
}
const PageTitle = (props:PageTitleProps)=>{
  return <p>{props.title}</p>
}

interface CinemaProps{
  name : string,
  movie1 : Movie,
  movie2 : Movie;
}
const Cinema = (props:CinemaProps)=>{
  return <p>{props.name}{props.movie1.title}{props.movie1.director}{props.movie2.title}{props.movie2.director}</p>
}

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 : Movie = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  
  const movie3 : Movie = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1={movie1}
        movie2={movie2}
      />

      <Cinema
        name={cinema2Name}
        movie1={movie3}
        movie2={movie4}
      />
    </div>
  );
};

export default App;
