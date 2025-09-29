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
})

export default router;