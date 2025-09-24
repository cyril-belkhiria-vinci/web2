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
    return res.sendStatus(400);
  }
    return res.json(defaultFilms)
})

export default router;