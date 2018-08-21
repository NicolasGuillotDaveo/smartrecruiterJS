const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');

const server = express();
server.use(bodyParser.urlencoded({extended: true
}));

server.use(bodyParser.json());

server.post('',(req,res)=>{
    // const movieToSearch= req.body.result && req.body.result.parameters && req.body.result.parameters.movie
    // const reqUrl = encodeURI(`http://omdbapi.com/?t=${movieToSearch}&apikey=${API_KEY}`);
    // http.get(reqUrl, (responseFromAPI) => {
    //     let completeResponse = '';
    //     responseFromAPI.on('data', (chunk) => {
    //         completeResponse += chunk;
    //     });
    //     responseFromAPI.on('end', () => {
    //         const movie = JSON.parse(completeResponse);
    //         let dataToSend= movieToSearch === 'The Godfather' ? `I don't have the required info on that. Here's some infon on 'The Godfather' instead.\n` : '';
    //         dataToSend += `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`;
    const actionDF = req && req.queryResult && req.queryResult.action;
    
    if(actionDF == "input.welcome")
    {
        return res.json({
            fulfillmentText: `Bienvenue prénom, je m'appelle Léo, je suis le dernier né du Lab de Daveo.`,
            source: 'webhook node js'
        });
    }
    else
    {
        return res.json({
            fulfillmentText: 'hello',
            source: 'webhook node js',
            test: "test"
   });
    }    
    //     });
     }
     , (error) =>{
        return res.json({
            speech: 'Something went wrong',
            displayText: 'Something went wrong',
            source: 'webhook node js'
        });
    });
//});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});