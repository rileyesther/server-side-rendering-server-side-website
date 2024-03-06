import express from 'express' ;

const app = express ();

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function () {
    console.log (`Application started on http://localhost:${app.get('port')}`)

})