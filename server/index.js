const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//Secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET)



app.post('/stripe', (req,res)=>{
    const {token, amount} = req.body;
    stripe.charges.create({source:token.id, 
        amount, 
        currency: 'usd',
        description: 'whatever'},
        (error, response)=>{
            error
            ?res.status(500).send({error})
            :res.status(200).send({response})

        })
})


const PORT=4000;
app.listen(PORT, ()=>console.log(`server on ${PORT}`));