import express from 'express' ;

import fetchJson from './helpers/fetch-json.js'

const app = express ();

//const allData_houses = await fetchJson('https://fdnd-agency.directus.app/items/f_houses')
//let everything_houses_data = allData_houses.data;//hierin staat alle data

//const images_houses = await fetchJson('https://fdnd-agency.directus.app/items/f_houses_files')
 //let allData_images = images_houses.data;//hierin staat alle data


app.set('port', process.env.PORT || 3000)

app.set('view engine','ejs')

app.set('views', './views')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index') 

})

app.listen(app.get('port'), function () {
    console.log (`Application started on http://localhost:${app.get('port')}`)

})
const apiUrl = 'https://fdnd-agency.directus.app/items/f_list'

