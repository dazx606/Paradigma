
const server = require('./src/app.js');
const { conn, Pokemon, Move, Type } = require('./src/db.js');
const axios = require('axios').default;
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at ' + PORT); // eslint-disable-line no-console
  });
  // Carga a la DB desde la API
  // axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  //   .then(function (response) {

  //     let pokemons = response.data.results;

  //     pokemons.forEach(async (e) => {

  //       try {
  //         const pokemon = (await axios.get(e.url)).data;
  //         const location = (await axios.get(pokemon.location_area_encounters)).data;
  //         const moves = [];
  //         const types = [];
  //         pokemon.types?.map(e => types.push(e.type.name));
  //         pokemon.moves?.map(e => moves.push(e.move.name));
          
  //         const actualPokemon = await Pokemon.findOrCreate({
  //           where: { id: pokemon.id },
  //           defaults: {
  //             name: pokemon.name,
  //             height: pokemon.height ? pokemon.height : 0,
  //             weight: pokemon.weight ? pokemon.weight : 0,
  //             location: location.length ? location[0].location_area.name : "N/A",
  //           }
  //         });
  //         //console.log(actualPokemon[0]);
  //         moves.forEach( async (e)=> {
  //           await Move.findOrCreate({where:{name:e}});
  //           await actualPokemon[0].addMove(e);
  //         });
  //         types.forEach( async (e)=> {
  //           await Type.findOrCreate({where:{name:e}});
  //           await actualPokemon[0].addType(e)
  //         });
          
          
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     });
  //   })
  //   .then(() => console.log("done"))
  //   .catch(function (error) {
  //     console.log(error);
  //   });
});
