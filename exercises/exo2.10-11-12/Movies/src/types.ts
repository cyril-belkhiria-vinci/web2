interface Movie {
    id : number ,
    titre : string,
    director : string,
    dureeMinute : number,
    image?:string,
    description?:string,
    budget?:number
}
export type {Movie}