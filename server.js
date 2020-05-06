const express = require(`express`)
const path = require(`path`)
const urllib = require(`urllib`)
////////////////
const app = express()
//////////////
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
//////////////////

app.get(`/sanity`, function (req, res) {
    res.send(`OK`)
})

app.get(`/recipes/:ingredient`, function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        console.log(JSON.parse(response.toString()).results)
        res.send(JSON.parse(response.toString()).results)
    })
})

//////////////////
const port = 8080
app.listen(port, function (res) {
    console.log(`listening on port ${port}`);

})