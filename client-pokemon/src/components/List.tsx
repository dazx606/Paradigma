import "../styles/style.css";
import { Pokemon } from '../interfaces/interfaces';


interface Props{
    pokemos?:Pokemon[],
    callBack:()=>void,
    setPoke:(poke:Pokemon)=>void,
}
const List = ({ pokemos, callBack, setPoke }: Props) => {



    return (
        <div className="table">
           
            <table >
                <thead>
                    <tr key={"principal"}>
                        <th>Id</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Weight</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemos?.length && 
                        pokemos.map((e) => 
                            <tr key={e.id} onClick={()=>{callBack!(); setPoke(e)}} className='row'>
                                <th>{e.id}</th>
                                <th><img className="image" src={"https://img.pokemondb.net/sprites/ruby-sapphire/normal/"+e.name+".png"} alt="Bulbasaur"/></th>
                                <th>{e.name}</th>
                                <th>{e.location}</th>
                                <th>{e.weight}</th>
                                <th>{e.height}</th>
                            </tr>
                        )

                    }

                </tbody>
            </table>
        </div>
    )
}

export default List;
