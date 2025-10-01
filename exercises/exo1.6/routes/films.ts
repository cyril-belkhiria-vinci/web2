import { Router } from "express";
import { Film } from "../types";

const router = Router();
const defaultFilms : Film[] = [
    {
        id:1,
        title:"20th Century Girl",
        director:"Bang Woo-ri",
        duration:119
    },
    {
        id:2,
        title:"You Are The Apple Of My Eye",
        director:"Cho Young-myoung",
        duration:102
    },
    {
        id:3,
        title:"Run To You",
        director:"Lee Seung-hoon",
        duration:98
    },
];

router.get("/",(req,res)=>{
    if (req.query.order && typeof req.query.order !== "string") {
        return res.status(400);
  }
    console.log(req.path);
    const mindur = req.query['minimum-duration'];
    if(mindur === undefined)
        return res.status(200).json(defaultFilms);
    const min = Number(mindur);
    if(Number.isNaN(min))
        return res.status(400).json("Wrong minimum duration");
    const filtre = defaultFilms.filter(f=>Number(f.duration)>=min);
    return res.status(200).json(filtre);
    
});

router.get("/:id",(req,res)=>{
    if (req.query.order && typeof req.query.order !== "string") {
    return res.status(400);
  }
  const id = Number(req.params.id);
  if(isNaN(id))
    return res.status(400).json("Id non valide");
  const film = defaultFilms.find(film=>film.id === id);
  if(!film)
    return res.status(404).json("This film doesn't exist");
  return res.status(200).json(film);
});

router.post("/",(req,res)=>{
    const {title,director,duration,budget,description,imageUrl} = req.body;
    if(!title ||!director || typeof duration !== "number"|| duration<=0 )
        return res.status(400).json("Invalid film data");
    const newFilm = {
        id:defaultFilms.length+1,
        title,
        director,
        duration,
        ...(budget !== undefined && {budget}),
        ...(description !== undefined && {description}),
        ...(imageUrl !== undefined && {imageUrl}),
    }
    const exist = defaultFilms.some(f=>f.title.toLowerCase() === newFilm.title.toLowerCase()&&f.director.toLowerCase()===newFilm.director.toLowerCase());
    if(exist)
        return res.status(409).json("Film already exist");
    defaultFilms.push(newFilm);
    return res.status(201).json(newFilm);
});

router.delete("/:id", (req, res) => {
  console.log("DELETE request received for id:", req.params.id);
  const id = Number(req.params.id);
  const index = defaultFilms.findIndex((film) => film.id === id);
  console.log(index);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = defaultFilms.splice(index, 1);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

    if (
    !body ||
    typeof body !== "object" ||
    ("title" in body && (typeof (body as any).title !== "string" || !(body as any).title.trim())) ||
    ("director" in body && (typeof (body as any).director !== "string" || !(body as any).director.trim())) ||
    ("duration" in body && (typeof (body as any).duration !== "number" || (body as any).duration <= 0)) ||
    ("budget" in body && (typeof (body as any).budget !== "number" || (body as any).budget <= 0)) ||
    ("description" in body && (typeof (body as any).description !== "string")) ||
    ("imageUrl" in body && (typeof (body as any).imageUrl !== "string"))
    ) {
    return res.sendStatus(400);
    }

  const { title, director, duration, budget,description,imageUrl }: Partial<Film> = body as Partial<Film>;


  if (title !== undefined) {
    film.title = title;
  }
  if (director !== undefined) {
    film.director = director;
  }
  if (duration !== undefined) {
    film.duration = duration;
  }
  if (budget !== undefined) {
    film.budget = budget;
  }
  if (description !== undefined) {
    film.description = description;
  }
  if (imageUrl !== undefined) {
    film.imageUrl = imageUrl;
  }

  return res.json(film);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json("Invalid id");

  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || typeof duration !== "number" || duration <= 0)
    return res.status(400).json("Missing or invalid required fields");
  if (budget !== undefined && (typeof budget !== "number" || budget <= 0))
    return res.status(400).json("Invalid budget");

  const existingIndex = defaultFilms.findIndex(f => f.id === id);

  const newFilm = {
    id,
    title,
    director,
    duration,
    ...(budget !== undefined && { budget }),
    ...(description !== undefined && { description }),
    ...(imageUrl !== undefined && { imageUrl })
  };

  if (existingIndex !== -1) {
    defaultFilms[existingIndex] = newFilm;
    return res.status(200).json(newFilm);
  } else {
    const idAlreadyExists = defaultFilms.some(f => f.id === id);
    if (idAlreadyExists) return res.status(409).json("ID already exists");
    defaultFilms.push(newFilm);
    return res.status(201).json(newFilm);
  }
});

export default router;