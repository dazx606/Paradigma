
import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';
import List from '../components/List';
import { findAll } from '../services/servicesApi';
import { Pokemons, Pokemon } from '../interfaces/interfaces';
import VideoComp from '../components/VideoComp';
import { EditContainer } from '../components/EditContainer';





const MainPage = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [hiddenCard, setHiddenCard] = useState<boolean>(true);
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [showForm, setShowForm] = useState<boolean>(true);

    const setPoke = (pokemon:Pokemon):void =>{
        setPokemon(pokemon);
    }

    const hiddenCardInfo = ():void => {
        setHiddenCard(true);
    }

    const hiddenEditForm = ():void => {
        setShowForm(true);
    } 

    const showEditForm = ():void => {
        setShowForm(false);
    } 

    const showCardInfo =():void=>{
        setHiddenCard(false);
    }

    const getPokemons=()=>{
        findAll().then((res:Pokemons)=>setPokemons(res.data))
    }

    useEffect(()=>{
        getPokemons()
    },[])

    return (
        <>
            <EditContainer callbackClose={hiddenEditForm} hidden={showForm} pokemon={pokemon} getPokemons={getPokemons}/>
            <VideoComp/>
            <CardPokemon callBackClose={hiddenCardInfo} hidden={hiddenCard} pokemon={pokemon} getPokemons={getPokemons} showForm={showEditForm}/>
            <List pokemos={pokemons} callBack={showCardInfo} setPoke={setPoke}/>

        </>
    )
}


export default MainPage;