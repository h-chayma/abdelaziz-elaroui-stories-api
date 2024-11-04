const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    date: Date,
    story: String,
    youtubeId: String
});

module.exports = mongoose.model('Story', storySchema);
