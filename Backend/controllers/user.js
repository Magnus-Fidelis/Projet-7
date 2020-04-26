const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const Jimp = require('jimp');
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'forum',
  password: 'mS2fwR8K4zwHZ5$h3thjy*7bzk9dsZ',
  port: 5432,
})
/*
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
*/

/* ---------------------
		Module d'Inscription
		isVerified manquant
	 ---------------------
*/

exports.signup = (req, res, next) => {
	let email = req.body.email;
	let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let name = req.body.name;
	let nameReg = /^[a-zA-Z\-]+$/;

	if (!(email).match(emailReg) || !(name).match(nameReg) ) {
		console.log(req, "Tentative d'intrusion")
	}

	else if (req.body.CGU != true)
	{
		res.status(400).json({message: "Veuillez accepter les CGU pour vous inscrire."})
	}

	else {

  bcrypt.hash(req.body.password, 10)
		.then(hash => 
		{
			if(req.body.CGU == false){
				res.status(403).json({message: "Vous devez accepter les CGU pour vous inscrire"})
				next()
			}

			const user =
			({
				email: req.body.email,
				password: hash,
				name: req.body.name,
				createdAt: Date.now(),
			});

  pool.query('INSERT INTO person (email, password, name, createdAt, user_uid) VALUES ($1, $2, $3, $4, uuid_generate_v4())', [user.email, user.password, user.name, user.createdAt], (error, results) => {
		if(error)
		{
	
		switch (error.constraint){
			case ('unique_email_adress'):
			return	res.status(400).json({error: "Email déjà utilisé !"});
			
			case('unique_name'):
			return res.status(400).json({error: "Le nom est déjà utilisé veuillez en choisir un autre"});

			default:
			console.log(error);
			return res.status(401).json({error: "Il semble y avoir eu une erreur lors de votre inscription, contactez l'administration pour tenter de résoudre le problème"})
		}
		}
	else {


	
		async() => {

		
		let transporter = nodemailer.createTransport({
			host: "mail.trinityfall.com",
			port: 25,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'admins@trinityfall.com', // user
				pass: 'r#f4otamU*SDU22mgYX8nBSipvqLr5' // password
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false
			}
		});		
 
		let mailverif = jwt.sign(
			{ 
				userEmail: 'admins@trinityfall.com' /* plus tard req.body.email,*/
			},
			'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5',
			{ expiresIn: '24h' });

			let info = await transporter.sendMail({
				from: '"Trinity Fall" <admins@trinityfall.com>', // sender address
				to: req.body.email, // list of receivers
				subject: "Bienvenue à TrinityFall !", // Subject line
				text: 'Bonjour et bienvenue à Trinity Fall ! \n ' + 'Pour vérifier votre inscription veuillez cliquer sur le lien ci-dessous !:\n' + 'https://www.trinityfall.com/auth/confirmation/'  + mailverif, // plain text body
				html: `<p>Bonjour et bienvenue à Trinity Fall !<br>Pour vérifier votre inscription veuillez cliquer sur le lien ci-dessous !:<br>https://www.trinityfall.com/api/user/confirmation/${mailverif}</p>` // html body
			});

		

	}
	res.status(201).json({ message: "Compte créé. Veuillez patienter la validation par l'administration." })
}})

		})
	
		.catch(error => {

			console.log(error)
			var message = []
			// error.errors.forEach(element => {
			// 	if(element.path == 'email' && element.kind == 'unique')
			// 		message.push('Votre Email est déjà prise')
			// 	if(element.path == 'name' && element.kind == 'unique')
			// 		message.push('Votre nom de compte est déjà pris')
			// });
			res.status(400).json({message: message})
		})

	}
	
}
/* ---------------------
		Module de Connexion
	 ---------------------
*/
exports.login = (req, res, next) => {


	
	pool.query('SELECT password, user_uid, accountType, isVerified  FROM person WHERE email =$1', [req.body.email], (error, results) => {
    if (error) {
      throw error
		}


    else if (results.rowCount == 0) {
      return res.status(401).json({ error: 'Utilisateur inconnu' });
		}

		else if (results.rows[0].isverified != true)
		{
			res.status(401).json({error: "Votre compte n'a pas encore été confirmé !"})
		}

		else 
		{


		bcrypt.compare (req.body.password, results.rows[0].password)
		 .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
					}

          res.status(200).json({
            userId: results.rows[0].user_uid,
            token: jwt.sign(
							{ 
								userId: results.rows[0].user_uid,
								accountType: results.rows[0].accounttype,
							},
              'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5',
							{ expiresIn: '24h' },
						)
					});
					 
        }) 
				.catch(error => res.status(500).json({ error }));
			
}})

}
  

/* ---------------------
		Changement de mot de passe/avatar
	 ---------------------
*/

exports.updateUser = (req, res) => {
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const userId = decodedToken.userId;

	if(req.file){
		
		const path = req.file.path;
		
			// open a file called "lenna.png"
			Jimp.read(path, (err, images) => {
				if (err) console.log(error);

				else if (images.hasAlpha())
				{
					images
					.resize(80, 80)
					.quality(60)
					.write(`./images/x${req.file.filename}.webp`); // save
					let paths = `http://${req.get('host')}/api/images/x${req.file.filename}.webp`

					pool.query('UPDATE person SET avatar = $1 where user_uid =$2', [paths, userId], (error, results) => {
						if (error){
							console.log(error)
						}
						
						res.status(200).json({message:' Avatar changé !'});
					})

				}

				/* else if (1=1) {
					gif à implanter
				}*/
				else  
				{
					images
					.resize(80, 80)
					.quality(60)
					.write(`./images/x${req.file.filename}.jpeg`); // save

					let paths = `http://${req.get('host')}/api/images/x${req.file.filename}.jpeg`
					console.log(paths, userId, 'avant que ça bug')
					pool.query('UPDATE person SET avatar = $1 where user_uid =$2', [paths, userId], (error, results) => {
						if (error){
							console.log(error)
						}
						res.status(200).json({message:' Avatar changé !'});
					})
				}

					
	
			});


	} 

	else{
		bcrypt.hash(req.body.password, 10)
		.then( hash => {
			pool.query('UPDATE person SET password = $1 where user_uid =$2', [hash, userId], (error, results) => {
				if (error){
					console.log(error)
				}
				res.status(200).json();
			})
			}
			
			 

		)
		.catch(error => console.log(error));
	
	}
}
/* ---------------------
		Récupération du Profil
	 ---------------------
*/
exports.getUser = (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const userId = decodedToken.userId;

  pool.query('SELECT name, email, avatar FROM person WHERE user_uid = $1', [userId], (error, results) => {
    if (error) {
      throw error
		}
		let user = {
			name: results.rows[0].name,
			email: results.rows[0].email,
			avatar: results.rows[0].avatar,
		}
    res.status(200).send(user)
  })

}

/* ---------------------
		Suppression du Profil
	 ---------------------
*/

exports.deleteUser = (request, response) => {
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const userId = decodedToken.userId;

  pool.query('DELETE FROM person WHERE user_uid = $1', [userId], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Votre compte a bien été supprimé !`)
  })
}


/* ---------------------
		Gestion des Favoris
	 ---------------------
*/
exports.addFavoris = (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const userId = decodedToken.userId;
	const fav = req.body.favoris;


  pool.query('UPDATE person  SET favoris = array_append(favoris, $1) WHERE user_uid=$2', [fav, userId], (error, results) => {
    if (error) {
      throw error
		}

		res.status(200).send(`Favoris correctement ajouté !`)
  })

}

exports.getFavoris = (req, res, next) => {
	/*
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');*/
	const userId = '08d5e3ea-c8ea-4b92-a81d-5b9d2719f326' /*decodedToken.userId;*/

  pool.query('SELECT favoris FROM person WHERE user_uid=$1', [userId], (error, results) => {
    if (error) {
      throw error
		}

		res.status(200).send(results);
  })

} 

exports.confirmationPost = (req, res, next) => {

	console.log('im here')
	const token = req.params.id;
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const email = decodedToken.userEmail;

	pool.query('UPDATE person SET isVerified = true WHERE email=$1', (email), (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}

exports.resendTokenPost = (req, res, next) => {

	   var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);
 
    User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
				if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });
				
					userId = user._id,
					token = jwt.sign(
						{ userId: user._id },
						'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5',
						{ expiresIn: '24h' },
					)

					transporter = nodemailer.createTransport({ 
						service: "trinityfall", 
						auth: {
							user: 'admins@trinityfall.com',
							pass: 'r#f4otamU*SDU22mgYX8nBSipvqLr5',
						}
						}),

						mailOptions = {
							from: 'admins@trinityfall.com',
							to: req.body.email,
							subject: 'Inscription à Trinity Fall',
							text: 'Bonjour et bienvenue à Trinity Fall ! \n ' + 'Pour vérifier votre inscription veuillez cliquer sur le lien ci-dessous !:\n' + 'Inscription fermée au public pour le moment '/*http://localhost:3000/auth/confirmation'  +   token ,*/
						},
						transporter.sendMail(mailOptions, function(error, info){
							if (error){
								res.status(500).json({error});
							}
							else{
								res.status(200).send('Un email de vérification a été envoyé à ' + req.body.email + '.')
							}

})})}