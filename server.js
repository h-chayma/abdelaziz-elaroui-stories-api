const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const stories = require('./stories');

// Get all stories
app.get('/stories', (req, res) => {
    res.json(stories);
});

// Get a single story by ID
app.get('/stories/:id', (req, res) => {
    const story = stories.find(st => st.id == req.params.id);
    if (story) {
        res.json(story);
    } else {
        res.status(404).send('Story not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
