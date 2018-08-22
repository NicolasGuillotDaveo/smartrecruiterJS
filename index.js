const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.urlencoded({extended: true
}));

server.use(bodyParser.json());

server.post('',(req,res)=>{
//On place dans IntentName le nom de l'intent détecté par Dialogflow
   let IntentName = req.body.queryResult && req.body.queryResult.intent && req.body.queryResult.intent.displayName ? req.body.queryResult.intent.displayName :'unknown';
 //On place dans basicAnswer la réponse de base proposée par Dialogflow par rapport à l'intent détecté
   let basicAnswer = req.body.queryResult && req.body.queryResult.fulfillmentText ? req.body.queryResult.fulfillmentText :'unknown';
//on diffère les cas en fonction du nom de l'intent
   switch(IntentName){
    case "Présentation - Bienvenue":
    return res.json({
        fulfillmentText: `{"text":\`Bienvenue {prénom}, je m'appelle Léo, je suis le dernier né du Lab de Daveo.\`,
                            "response":{"button":"Enchanté"}}`,
        source: 'webhook node js'
    });
     break;
     case "Presentation - Continuer":
     return res.json({
        fulfillmentText: `Faisons connaissance à présent! Si j'ai bien compris à travers ton profil LinkedIn, tu es {Poste} à {Société}?`,
        source: 'webhook node js'
    });
    break;
     
     default: //si l'intent ne demande pas de personnaliser le message, alors on renvoie la réponse de base.
     return res.json({
        fulfillmentText: basicAnswer,
        source: 'webhook node js'
});
   }
     }
     , (error) =>{
        return res.json({
            speech: 'Something went wrong',
            displayText: 'Something went wrong',
            source: 'webhook node js'
        });
    });

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});