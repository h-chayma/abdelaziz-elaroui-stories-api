// routes/storiesRoutes.js
const express = require('express');
const { getAllStories, getStoryById } = require('../controllers/storiesController');
const router = express.Router();

router.get('/', getAllStories);
router.get('/:id', getStoryById);

module.exports = router;
