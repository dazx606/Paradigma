const { Router } = require('express');
const { Pokemon, Move, Type } = require('../db');


const router = Router();


module.exports = router;


//-----------------------------------------------------------------
router.get("/getAll", async (req, res, next) => {
   
    try {
        let response = await Pokemon.findAll(
            {
                include:[
                    {
                        model:Move,
                        through: {
                            attributes: ['moveName']
                          }
                    },
                    {
                        model:Type,
                        through: {
                            attributes: ['typeName']
                          }
                    },
                
                ],
                order:['id']
            })
        res.status(201).send({"data":response})
    } catch (error) {
        next(error)
    }
});

router.delete("/pokemon", async (req, res, next)=>{
    
    const {id} = req.query;
    try {
        const result = await Pokemon.destroy({where:{id}})
        result === 1 ? res.send({msg:"deleted"}):res.send({msg:"not deleted"});
    
    } catch (error) {
        next(error);
    }
});

router.patch("/updatePokemon", async (req, res, next)=>{
    const {id} = req.query;
    const params = req.body;

    try {
        const result = await Pokemon.update(params, {where:{id}})
        result[0] === 1 ? res.send({msg:"Updated", result}):res.send({msg:"Not Updated", result})
    } catch (error) {
        next(error)
    }
})