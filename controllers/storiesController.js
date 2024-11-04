const stories = require('../data/stories');

exports.getAllStories = (req, res) => {
    res.json(stories);
};

exports.getStoryById = (req, res) => {
    const story = stories.find(st => st.id == req.params.id);
    if (story) {
        res.json(story);
    } else {
        res.status(404).send('Story not found');
    }
};

exports.showHome = (req, res) => {
    res.send('<h1>Welcome!</h1><p>Visit the <a href="/docs">documentation</a> for more information.</p>');
};
