import { Pokemon } from "../interfaces/interfaces";
import { deleteOne } from "../services/servicesApi";
import "../styles/style.css";



interface Props {
    hidden?: boolean,
    callBackClose: () => void,
    pokemon?: Pokemon,
    getPokemons:()=>void,
    showForm:()=>void,
}

const CardPokemon = ({ hidden, callBackClose, pokemon, getPokemons, showForm }: Props) => {
    
    const deletePokemon = (id:number):void =>{
        deleteOne(id).then(()=> getPokemons()).catch(err => console.log(err))
    }
    
    return (
        <div hidden={hidden}>

            <div className='cardContainer' >
                <div className="closeBtn" onClick={callBackClose}>X</div>
                <div className="cardTittle" hidden={hidden}>{pokemon?.name}</div>
                <img src={"https://img.pokemondb.net/sprites/go/normal/" + pokemon?.name + ".png"} alt="Bulbasaur" />
                <div><b>location:</b> {pokemon?.location}</div>
                <br></br>
                <b>Moves:</b><ul className="moves">{pokemon?.moves.map((e,k) => <li key={k}>{e.name}</li>)}</ul>
                <br></br>
                <b>Types:</b><ul>{pokemon?.types.map((e,k) => <li key={k}>{e.name}</li>)}</ul>

                <div>
                    <button className="btn" onClick={()=>{
                        //window.confirm("Esta seguro que desea eliminar el pokemon?")
                        if(window.confirm("Esta seguro que desea eliminar el pokemon?")) {
                            deletePokemon(pokemon!.id)
                            callBackClose()
                        }
                        
                        }}>Delete</button>
                    <button className="btn" onClick={()=>{showForm(); callBackClose();}}>Edit</button>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default CardPokemon;
