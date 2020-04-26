const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const auth_admin = require('../../middleware/auth_admin')

const controller = require('../../controllers/forum/topics')

// Get all topics
router.get('/',controller.getTopicFromCategory);
// Create new topic
router.post('/', auth_admin, controller.createTopics);

// Get one topic
router.get('/:id', auth, controller.getTopicById);
// Update one topic
router.put('/:id', auth_admin, controller.updateTopic);
// Delete one topic
router.delete('/:id', auth_admin, controller.deleteTopics);

// Get all topic from a category
router.get('/fromCategory/:id', auth, controller.getTopicFromCategory)

module.exports = router;

  