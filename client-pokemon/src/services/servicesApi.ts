import { Pokemons } from '../interfaces/interfaces';
import { Params } from '../components/EditContainer';
const URL_API_POKE: string = "http://localhost:3001";



export const findAll =  ():Promise<Pokemons>  => {
    const path:string = "/getAll";
 
    return fetch(URL_API_POKE + path, {
        method: "GET",
        mode: "cors",
    })
        .then((response) => response.ok ? response.json() : Promise.reject(response.statusText))
        .catch((err) => { console.log(err) })
 };

 export const deleteOne = (id:number):Promise<any> => {
    const path:string = "/pokemon?id=";

    return fetch(URL_API_POKE + path + id, {
        method: "DELETE",
        mode: "cors"
    })
    .then((response) => response.ok ? response.json() : Promise.reject(response.statusText))
    .catch((err) => { console.log(err) })
 };

 export const updateOne = (params:Params, id:number) => {
    
    const path:string = "/updatePokemon?id="
    console.log(params);
    return fetch(URL_API_POKE + path + id, {
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify(params),
        headers: {
            "content-type": "application/json"
        }
    })
    .then((response) => response.ok ? response.json() : Promise.reject(response.statusText))
    .catch((err) => { console.log(err) })
 }