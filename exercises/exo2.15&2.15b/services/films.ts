import { Film } from "../types";

let films: Film[] = [
{ id: 1, title: "20th Century Girl", director: "Bang Woo-ri", duration: 119 },
{ id: 2, title: "You Are The Apple Of My Eye", director: "Cho Young-myoung", duration: 102 },
{ id: 3, title: "Run To You", director: "Lee Seung-hoon", duration: 98 }
];

export const filmService = {
getAll(minDuration?: number): Film[] {
  if (minDuration === undefined) return films;
  return films.filter(f => f.duration >= minDuration);
},

getById(id: number): Film | undefined {
return films.find(f => f.id === id);
},

create(data: Partial<Film>): Film | null {
  const { title, director, duration } = data;

  if (!title || !director || typeof duration !== "number" || duration <= 0) {
    return null;
  }

  const exists = films.some(
    f =>
      f.title.toLowerCase() === title.toLowerCase() &&
      f.director.toLowerCase() === director.toLowerCase()
  );
  if (exists) return null;

  const newId =
    films.length > 0 ? Math.max(...films.map(f => f.id)) + 1 : 1;

  const newFilm: Film = {
    id: newId,
    title,
    director,
    duration,
  };

  films.push(newFilm);
  return newFilm;
},

delete(id: number): Film | null {
const index = films.findIndex(f => f.id === id);
if (index === -1) return null;
const deleted = films.splice(index, 1)[0];
return deleted;
},

updatePartial(id: number, data: Partial<Film>): Film | null {
const film = films.find(f => f.id === id);
if (!film) return null;

if (
  ("title" in data && typeof data.title !== "string") ||
  ("director" in data && typeof data.director !== "string") ||
  ("duration" in data && (typeof data.duration !== "number" || data.duration <= 0)) ||
  ("budget" in data && (typeof data.budget !== "number" || data.budget <= 0))
) return null;

Object.assign(film, data);
return film;


},

replace(id: number, data: Partial<Film>): Film | null {
const { title, director, duration } = data;
if (!title || !director || typeof duration !== "number" || duration <= 0)
  return null;
const newFilm: Film = { id, ...data } as Film;
const index = films.findIndex(f => f.id === id);
if (index !== -1) {
  films[index] = newFilm;
  return newFilm;
}
const idExists = films.some(f => f.id === id);
if (idExists) return null;
films.push(newFilm);
return newFilm;
}
};