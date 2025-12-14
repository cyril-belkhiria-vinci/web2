import { Router } from "express";
import { filmService } from "../services/films";

const router = Router();

router.get("/", (req, res) => {
const minDurRaw = req.query["minimum-duration"];
const minDur = Array.isArray(minDurRaw) ? minDurRaw[0] : minDurRaw;

const min = minDur !== undefined ? Number(minDur) : undefined;

if (minDur !== undefined && Number.isNaN(min)) {
return res.status(400).json("Wrong minimum duration");
}

return res.json(filmService.getAll(min));
});

router.get("/:id", (req, res) => {
const id = Number(req.params.id);
if (isNaN(id)) return res.status(400).json("Invalid id");
const film = filmService.getById(id);
if (!film) return res.status(404).json("Film not found");
return res.json(film);
});

router.post("/", (req, res) => {
const film = filmService.create(req.body);
if (!film) return res.status(400).json("Invalid film data or film exists");
return res.status(201).json(film);
});

router.delete("/:id", (req, res) => {
const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400);
  }
const deleted = filmService.delete(id);
if (!deleted) return res.status(404).json("Film not found");
return res.json(deleted);
});

router.patch("/:id", (req, res) => {
const id = Number(req.params.id);
const film = filmService.updatePartial(id, req.body);
if (!film) return res.status(400).json("Invalid update or film not found");
return res.json(film);
});

router.put("/:id", (req, res) => {
const id = Number(req.params.id);
const film = filmService.replace(id, req.body);
if (!film) return res.status(400).json("Invalid film data or ID already exists");
return res.json(film);
});

export default router;