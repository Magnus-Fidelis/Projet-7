const jwt = require('jsonwebtoken')
const Jimp = require('jimp');
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'forum',
  password: 'mS2fwR8K4zwHZ5$h3thjy*7bzk9dsZ',
	port: 5432,
	client_encoding: 'UTF8',
})

// ------------------------------ //
// 																//
// ---------- MESSAGES ---------- //
//																//
// ------------------------------ //

exports.createMessage = (req, res, next) => {
	
	const token = req.headers.authorization.split(' ')[1];
	const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
	const userId = decodedToken.userId;

	 created = new Date()
	pool.query('INSERT INTO messages (_user, _subject, texts, datecreated, dateupdated, message_uid) VALUES ($1, $2, $3, $4, $5, uuid_generate_v4())', [userId, req.body._subject, req.body.text, created, created], (error, results) => {
		if (error){
			console.log('Erreur dans la création du message', error);
		}

		res.status(200).json({ message: 'Message crée'})
	})
};
exports.getMessagesFromSubject = (req, res, next) => {	
	pool.query('SELECT * FROM messages LEFT JOIN person ON messages._user = person.user_uid where _subject = $1 ORDER BY datecreated DESC LIMIT 10', [req.params.id], (error, results) => {
		if (error){
			console.log('Erreur dans la création du message', error);
			res.status(400).json({ message: 'Erreur dans la création du message'})
		}

		else {
			const token = req.headers.authorization.split(' ')[1];
			const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
			const userId = decodedToken.userId;
			const userAccountType = decodedToken.accountType;
			results.rows.forEach (message => {
				if(message._user == null){
					message.user = {
						name: 'inconu',
						title: '',
						avatar: 'assets/icons/person.svg',
						accountType: 0,
						_id: ''
					}
				}
				// If user is the origninal poster or if he is moderator/admin 
				// (moderator can't edit admin's messages)
				if (message._user == userId || 
					 (userAccountType > 3 && userAccountType >= message._user.accountType)) 
				{
					message.canEdit = true
					message.canDelete = true 
				} else {
					message.canEdit = false	
					message.canDelete = false 
				}

				delete message.password
				delete message.user_uid
				delete message.accounttype
				delete message.isverified
			})
			const messages = results.rows;
				pool.query('SELECT COUNT(*) FROM messages where _subject= $1', [req.params.id], (error, results) => { 
				if (error){
					console.log('Erreur dans la création du message', error);
					res.status(400).json({ message: 'Erreur dans la création du message'})
				}
		
				else {
					let	page = Math.ceil(results.rows[0].count / 10)
					

					const sendtoClient = {
						messages: messages,
						page: page
					}
					res.status(200).json(sendtoClient);
				}
			})

		}
	})
}

exports.getMessagesFromSubjectbypage = (req, res, next) => {
	const page = req.params.page / 10
	
	pool.query('SELECT * FROM messages LEFT JOIN person ON messages._user = person.user_uid where _subject = $1 ORDER BY datecreated ASC LIMIT 10 OFFSET $2', [req.params.id, page], (error, results) => {
		if (error){
			console.log('Erreur dans la création du message', error);
			res.status(400).json({ message: 'Erreur dans la création du message'})
		}

		else {
			const token = req.headers.authorization.split(' ')[1];
			const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
			const userId = decodedToken.userId;
			const userAccountType = decodedToken.accountType;
			results.rows.forEach (message => {
				if(message._user == null){
					message.user = {
						name: 'inconu',
						title: '',
						avatar: 'assets/icons/person.svg',
						accountType: 0,
						_id: ''
					}
				}
				// If user is the origninal poster or if he is moderator/admin 
				// (moderator can't edit admin's messages)
				if (message._user == userId || 
					 (userAccountType > 3 && userAccountType >= message._user.accountType)) 
				{
					message.canEdit = true
					message.canDelete = true 
				} else {
					message.canEdit = false	
					message.canDelete = false 
				}

				delete message.password
				delete message.user_uid
				delete message.accounttype
				delete message.isverified
			})
			const messages = results.rows;
				pool.query('SELECT COUNT(*) FROM messages where _subject= $1', [req.params.id], (error, results) => { 
				if (error){
					console.log('Erreur dans la création du message', error);
					res.status(400).json({ message: 'Erreur dans la création du message'})
				}
		
				else {
					let	page = results.rows[0].count / 10

					const sendtoClient = {
						messages: messages,
						page: page
					}
					res.status(200).json(sendtoClient);
				}
			})

		}
	})
}


// Update message by ID
exports.updateMessage = (req, res, next) => {
	const date = new Date();
	pool.query('UPDATE messages SET texts = $1, dateupdated = $2 WHERE message_uid = $3', [req.body.text, date, req.params.id], (error, results) => {
		if (error){
			throw error
		}

		else {
			message => {
				//editor can alway edit it's message anyways
				message.canEdit = true
				message.canDelete = true 
			res.status(200).json(message)
				
	pool.query('SELECT _subject from MESSAGES where message_uid = $1', [req.params.id], (error, results) => {
		if (error){
			throw error
		}
		else {
			const sujet = results.rows[0]._subject
						
	pool.query('UPDATE subjects set _lastUpdate = $1', [sujet], (error, results) => {
		if (error){
			throw error
		}

	})

		}
	})

			}
		}
		
	})
}; 

// Delete message by ID
exports.deleteMessage = (req, res, next) => {
	pool.query('DELETE FROM messages WHERE message_uid = $1', [req.params.id], (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}; 

exports.uploadImageForum = (req, res, next) => {

	if (req.file)
	{
		const path = req.file.path;

 
			// open a file called "lenna.png"
			Jimp.read(path, (err, images) => {
				if (err) throw err;

				else if (images.hasAlpha())
				{
					images
					.quality(60)
					.write(`./images/x${req.file.filename}.webp`); // save
					image = `http://${req.get('host')}/api/images/x${req.file.filename}.webp`
					res.status(200).json({link: image}) 
				}
				else {

			
				images
					.quality(60) // set JPEG quality
					.write(`./images/x${req.file.filename}.jpeg`); // save
					console.log(images.hasAlpha())
					image = `http://${req.get('host')}/api/images/x${req.file.filename}.jpeg`
					res.status(200).json({link: image}) 
				}
			})
			
			;

	}
	else 
	{
		res.status(400).json({message: "Pas ou mauvais fichier !"})
	}

}

 