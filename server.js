import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

// Sample stories data
const stories = [
    {
        id: 1,
        title: "The Journey Begins",
        image: "https://example.com/image1.jpg",
        date: "2024-10-22",
        text: "This is the first story by Abd Aziz Aroui...",
        audio: "https://example.com/audio1.mp3"
    },
    {
        id: 2,
        title: "The Adventure Continues",
        image: "https://example.com/image2.jpg",
        date: "2024-10-22",
        text: "Another great story by Abd Aziz Aroui...",
        audio: "https://example.com/audio2.mp3"
    }
];

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
