const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const auth_admin = require('../../middleware/auth_admin')

const controller = require('../../controllers/forum/subjects')

router.get('/', auth_admin, controller.getSubjects);

router.post('/', auth, controller.createSubjects);

router.get('/last10', auth, controller.getLast10Subjects)

router.get('/:id', auth, controller.getSubjectById);

router.put('/:id', auth, controller.updateSubject);

router.delete('/:id', auth, controller.deleteSubject);

router.get('/fromTopic/:id', auth, controller.getSubjectFromTopic);


module.exports = router;

  