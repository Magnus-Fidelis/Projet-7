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
// ----------- SUBJECTS ----------- //
//																//
// ------------------------------ //


exports.getSubjects = (req, res, next) => {
	pool.query('SELECT * FROM subjects', (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})
};

exports.getSubjectById = (req, res, next) => {
	pool.query('SELECT * FROM subjects WHERE subject_uid =$1', [req.params.id], (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})
};

exports.createSubjects = (req, res, next) => {
const date = new Date();

	pool.query('INSERT INTO subjects (name, description, _topic, _lastupdate, subject_uid) VALUES ($1, $2, $3, $4, uuid_generate_v4())', [req.body.name, req.body.description, req.body._topic, date], (error, results) => {
		if (error){
			throw error
		}
		let name = req.body.name;
		let nameReg = /^[a-zA-Z\-]+$/; 
	
		if (!(name).match(nameReg) ) {
			console.log(req, "Tentative d'intrusion")
		}
	
		return res.status(200).json({message: "Sujet crée avec succès"})
	})
};

exports.getSubjectFromTopic = (req, res, next) => {
	console.log(req.params.id)
	console.log(req.body);
	pool.query('SELECT * FROM subjects where _topic = $1',  [req.params.id], (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})
};

exports.updateSubject = (req, res, next) => {

	pool.query('UPDATE subjects SET name = $1', (req.body.name), (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}; 

exports.deleteSubject = (req, res, next) => {
	pool.query('DELETE FROM subjects WHERE name = $1', (req.body.name), (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}; 

exports.getLast10Subjects = async (req, res) => {
	//grabing current user in database
/*
	subjectModel.find({}).limit(10).sort('-_lastUpdate')
	.then(subjectList => {

			//adding read field to each subject
			subjectList.forEach(subject => {
				addReadField(subject, user)
			})
			//return to client
		 	res.status(200).json(subjectList)
		})
	.catch(error => res.status(400).json({ error }));*/
}

