const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

/*
------------
Inscription et connexion
------------
*/
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

/*
------------
Récupération des données user et suppression du compte
------------
*/
router.get('/getuser', userCtrl.getUser);
router.delete('/deleteuser', userCtrl.deleteUser); 

/*
------------
Gestion des Favoris
------------
*/
router.put('/addfavoris', userCtrl.addFavoris);
router.get('/getfavoris', userCtrl.getFavoris);
router.delete('/deletefavoris/:id', userCtrl.deleteFavoris);


router.put('/modifyuser', multer, userCtrl.updateUser);

module.exports = router;