const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const multer = require('../../middleware/multer-config');

const controller = require('../../controllers/forum/message');


router.post('/', auth, controller.createMessage);

router.put('/:id', auth, controller.updateMessage);

router.delete('/:id', auth, controller.deleteMessage);

router.get('/fromSubject/:id', auth, controller.getMessagesFromSubject)

router.get('/fromSubject/:page', auth, controller.getMessagesFromSubjectbypage)

router.post('/upload', auth,  multer, controller.uploadImageForum)

module.exports = router;