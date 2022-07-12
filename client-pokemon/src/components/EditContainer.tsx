import { useState, useEffect } from 'react';
import { Pokemon } from '../interfaces/interfaces';
import { updateOne } from "../services/servicesApi";
import "../styles/style.css";



interface Props {
  callbackClose: () => void,
  hidden: boolean,
  params?: Params,
  pokemon?: Pokemon | undefined,
  getPokemons: () => void,
}

export interface Params {
  name?: string,
  location?: string,
  height?: number,
  weight?: number,

}
export const EditContainer = ({ callbackClose, hidden, pokemon, getPokemons }: Props) => {

  const [input, setInput] = useState<Params>({
    name: '',
    location: '',
    height: 0,
    weight: 0,

  });


  const handleInputChange = (event: any): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })

  };

  const clearForm = (): void => {
    setInput({
      name: '',
      location: '',
      height: 0,
      weight: 0,
    })
  };

  useEffect(() => {
    setInput({
      name: pokemon?.name,
      location: pokemon?.location,
      height: pokemon?.height,
      weight: pokemon?.weight,
    })
  }, [hidden])


  return (
    <div hidden={hidden} >

      <div className='editContainer'>
        <div className="closeBtn" onClick={() => { callbackClose(); clearForm() }}>X</div>
        <div>Edit</div>
        <div className="leftForm">
          <label>Name: <br></br>
            <input type='text' value={input.name} onChange={handleInputChange} name='name' />
          </label>
          <label>Location: <br></br>
            <input type='text' value={input.location} onChange={handleInputChange} name='location' />
          </label>
          <label>Height: <br></br>
            <input type='number' value={input.height} onChange={handleInputChange} name='height' />
          </label>
          <label>Weight: <br></br>
            <input type='number' value={input.weight} onChange={handleInputChange} name='weight' />
          </label>
          <br></br>
          <button onClick={async () => {

            await updateOne(input, pokemon!.id);
            clearForm();
            getPokemons();
            callbackClose();

          }}>Acept</button>
          <br></br>
        </div>
      </div>
    </div>
  )
}
