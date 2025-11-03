import { useState} from "react";
import type { SyntheticEvent } from 'react';
import {
  //Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import type { Movie } from "./types";

const MovieFav: Movie[] = [
  {
    titre: "20th Century Girl",
    director: "Bang Woo-Ri",
    dureeMinute: 119,
    image:
      "https://image.tmdb.org/t/p/original/od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
    description:
      "En 1999, Bo Ra, une lycéenne de 17 ans brillante et positive, surveille de près un camarade d'école pour le compte de sa meilleure amie, Yeon Du, folle de lui, avant d'être emportée dans une histoire d'amour bien à elle.",
  },
  {
    titre: "Dead Poets Society",
    director: "Peter Weir",
    dureeMinute: 130,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11671_p_v8_ad.jpg",
    description:
      "Todd Anderson, un garçon plutôt timide, est envoyé dans la prestigieuse académie de Welton, réputée pour être l'une des plus fermées et austères des États-Unis, là où son frère avait connu de brillantes études. C'est dans cette université qu'il va faire la rencontre d'un professeur de lettres anglaises plutôt étrange, M. Keating, qui les encourage à toujours refuser l'ordre établi. Les cours de M. Keating vont bouleverser la vie de l'étudiant réservé et de ses amis.",
  },
  {
    titre: "Fate/Stay Night : Heaven's Feel III. Spring Song",
    director: "Tomonori Sudo",
    dureeMinute: 120,
    image: "https://upload.wikimedia.org/wikipedia/en/3/33/SpringSongPoster.jpg",
  },
  {
    titre: "Dune: Part Two",
    director: "Denis Villeneuve",
    dureeMinute: 167,
    image:
      "https://aesthetealley.com/wp-content/uploads/2024/04/51ZMaTI7rL._AC_UF8941000_QL80_.jpg",
  },
  {
    titre: "Harry Potter Et Le Prince De Sang-Mélée",
    director: "David Yates",
    dureeMinute: 153,
    image:
      "https://www.mediatheque.be/fichiers/60/d9/6f/cover_vh0413_scale_500x500.jpg",
  },
  {
    titre: "Le Comte De Monte-Cristo",
    director: "Alexendre De La Patellière",
    dureeMinute: 178,
    image:
      "https://fr.web.img6.acsta.net/img/29/eb/29eb8341475fdb0b19b1d7b995b70e17.jpg",
  },
  {
    titre: "Chainsaw Man - The Movie: Reze Arc",
    director: "Tatsuya Yoshihara",
    dureeMinute: 100,
    image:
      "https://cdn.kinepolis.be/images/BE/65459BAD-CA99-4711-A97B-E049A5FA94D2/HO00012497/0000031188/Chainsaw_Man_-_Le_Film_:_LArc_de_Reze.jpg",
  },
];

const App = () => {
  const [titre, setTitre] = useState("");
  const [director, setDirector] = useState("");
  const [dureeMinute, setDureeMinute] = useState(0);
  const [image, setImage] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [budget, setBudget] = useState<number | undefined>(undefined);
  const [movie, setMovie] = useState(MovieFav);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!titre || !director || !dureeMinute) {
      alert("Les champs titre, réalisateur et durée sont obligatoires.");
      return;
    }

    const newMovie: Movie = { titre, director, dureeMinute, image, description, budget };
    setMovie([...movie, newMovie]);

    setTitre("");
    setDirector("");
    setDureeMinute(0);
    setImage("");
    setDescription("");
    setBudget(undefined);
  };

  return (
    <Box sx={{ py: 4, width: '100vw', px: 2 }}>
      <Typography variant="h3" gutterBottom align="center">
        🎬 Mes Films Préférés
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={3}
        mb={4}
      >
        {movie.map((m, index) => (
          <Card key={index} sx={{ p: 1, height: "100%" }}>
            {m.image && (
              <CardMedia
                component="img"
                image={m.image}
                alt={m.titre}
                sx={{
                  height: 250,              
                  objectFit: "contain",     
                  mb: 1
                }}
              />
            )}
            <CardContent>
              <Typography variant="h6">{m.titre}</Typography>
              <Typography variant="body2" color="text.secondary">
                Réalisateur: {m.director}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Durée: {m.dureeMinute} minutes
              </Typography>
              {m.description && (
                <Typography variant="body2" color="text.secondary">
                  {m.description}
                </Typography>
              )}
              {m.budget !== undefined && (
                <Typography variant="body2" color="text.secondary">
                  Budget: {m.budget} M
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="h4" gutterBottom>
        Ajouter un film
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
      >
        <TextField
          label="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
        <TextField
          label="Réalisateur"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
        <TextField
          label="Durée (en minutes)"
          type="number"
          value={dureeMinute || ""}
          onChange={(e) => setDureeMinute(Number(e.target.value))}
          required
        />
        <TextField
          label="Image (URL, optionnel)"
          value={image || ""}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          label="Description (optionnelle)"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
        />
        <TextField
          label="Budget (en million, optionnel)"
          type="number"
          value={budget ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            setBudget(val === "" ? undefined : Number(val));
          }}
        />
        <Button type="submit" variant="contained">
          Ajouter le film
        </Button>
      </Box>
    </Box>
  );
};

export default App;
