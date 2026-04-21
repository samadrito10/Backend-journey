    //creating server

    const express = require('express');

    const cors = require('cors');
    const app = express();
    const noteModel = require('./models/note.model');
    app.use(cors());
    app.use(express.json());
    app.use(express.static("./public"));
    

    /*-Post/api/notes
    -request body={title: string, description: string}
    */
   app.post('/api/notes', async (req, res) => {
    const{title, description} = req.body;
    const note = await  noteModel.create({
        title, description
    })
    res.status(201).json({
        Message: 'Note created successfully',
        note    
    });
   });

   /*-Get/api/notes
   -fetch all data and store in mongodb
   */
  app.get('/api/notes', async (req, res) => {
   const notes = await noteModel.find();
   res.status(200).json({
       Message: 'Notes fetched successfully',
       notes
   });
  });

 /**
  * -Delete/api/notes/:id
  * -delete the note with the given id from req.params
  * -return the deleted note in response
  */
    app.delete('/api/notes/:id', async (req, res) => {
        const id = req.params.id;
        await noteModel.findByIdAndDelete(id);

        res.status(200).json({
            Message: 'Note deleted successfully'
        });
    });


    /* -patch/api/notes/:id
    -update the note with the given id from req.params
    -return the updated note in response
    -request body={title: string, description: string}
    */

   app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    const {title, description} = req.body;

    await noteModel.findByIdAndUpdate(id, {title, description})
    res.status(200).json({
        Message: 'Note updated successfully'
    });
   });

   app.use('*name', (req, res) => {
    re.sendFile(__dirname, "..", '/public/index.html');
   })

    module.exports = app;