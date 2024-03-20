// Dit is het startpunt van de server
// Hierin importeer je de benodigde pakketten en definieer je de server
 
// 1. Importeer het npm pakket express uit de node_modules map
import express from 'express';
 
// 7. Hiermee importeer je de fetchJson functie uit het fetch-json.js bestand
// Deze functie haalt data op van een API en zet het om naar een json object
import fetchJson from './helpers/fetch-json.js'
 
// hiermee maak je een constante variabele aan met de url van de API
// Deze url bevat de data die je wilt ophalen
const apiUrl  = 'https://fdnd-agency.directus.app/items/f_houses'
 
// 2. Hiermee maak je een nieuwe express app
// Deze app is een object met een aantal methodes die je kunt gebruiken om een server te maken en routes te definiëren
const app = express();
 
// 4. hiermee zeg je dat de server de ejs template engine moet gebruiken
// De ejs template engine zorgt ervoor dat je dynamische html pagina's kunt maken
app.set('view engine', 'ejs')
// De server zoekt de ejs bestanden in de views map
app.set('views', './views')
 
// 5. Hiermee zeg je dat de server de public map moet gebruiken voor statische bestanden
// De public map bevat bestanden die je kunt gebruiken in de html pagina's
app.use(express.static('public'))
 
// dit zorgt ervoor dat het werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))
 
// 6. hiermee render je de index.ejs pagina
// De server stuurt de index.ejs pagina terug naar de client, de client ontvangt de pagina en ziet de html en css
// De client ziet de data van de API in de html pagina
app.get('/', function (req, res) {
    fetchJson(apiUrl).then((apiData)  => {
        res.render('index', {houses: apiData.data})
    })
})
 
// 3. Hiermee maak je een nieuwe server op poort 3000
// De ('app') server luistert naar requests op poort 3000
// De server reageert op requests met de juiste route, de server stuurt een response terug naar de client
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
 
 