const express = require("express")
const app = express()


app.use(express.json())

const notes = []


app.post("/notes", (req, res) => {
    const note = req.body
    notes.push(note)
    res.send("Note received")
})

app.get("/notes", (req, res) => {
    res.json(notes)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})