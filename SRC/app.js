const express = require("express")
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = 8000;

// SET VIEW ENGINE
app.set("view engine", "hbs")

// ..............PUBLIC STATIC PATH (for use of CSS in all (.hbs) files)..............
const static_path = (path.join(__dirname,"../public"))
app.use(express.static(static_path));

// ..............Chnanging the path of VIEWS folder.............. 
const templates_path = (path.join(__dirname,"../templates/views"))
app.set("views", templates_path)

// ..............Creating PARTIALS folder.............. 
const partials = (path.join(__dirname,"../templates/partials"))
hbs.registerPartials(partials)


// ..............ROUTING..............
//root , callback
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/a bout',(req,res)=>{
    res.render("about")
})
app.get('/weather',(req,res)=>{
    res.render("weather")
})
app.get('*',(req,res)=>{
    res.render("404error")
}) 

app.listen(port, ()=>{
   console.log(`listening to the port ${port}`)
})