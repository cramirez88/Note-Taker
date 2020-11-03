var router = require('express').Router();
var fs = require('fs');

const { v1: uuidv1 } = require('uuid');

function readFile(){
    var db = fs.readFileSync('db/db.json');
    return JSON.parse(db);
}

function writeFile(notes){
    fs.writeFile("db/db.json", JSON.stringify, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
      
}

router.get('/notes', function(req, res){
    res.json(readFile());
})

router.post('/notes', function(req, res){
    var note = req.body;
    var title = note.title;
    var text = note.text;



var newNote = {
    title, 
    text, 
    id: uuidv1 ()
}

var db = readFile();

db.push(newNote);
writeFile(db);
res.JSON(newNote);


})


router.delete('/notes/:id', function(req, res){
    var db = readFile();
    var filter = db.filter(note => note.id !== req.params.id);
    writeFile(filter);

    res.json({
        ok: true
    })
})

module.exports = router;
