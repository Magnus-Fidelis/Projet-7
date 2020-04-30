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
// ----------- TOPICS ----------- //
//																//
// ------------------------------ //


// Get all Topics
exports.getTopics = (req, res, next) => {
	pool.query('SELECT * FROM topics', (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})
};

// Get Topics by ID
exports.getTopicById = (req, res, next) => {
	pool.query('SELECT * FROM topics WHERE topic_uid =$1', [req.params.id], (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})

};
 

// Add a new topic in Database
exports.createTopics = (req, res, next) => {

	pool.query('INSERT INTO topics (name, description, _category, topic_uid) VALUES ($1, $2, $3, uuid_generate_v4())', [req.body.name, req.body.description, req.body._category], (error, results) => {
		if (error){
			console.log(error)
		}
	
		res.status(200).json({message: "Topic crée avec succès"})
	})
};

// Get all topic in a category
exports.getTopicFromCategory = (req, res, next) => {
	pool.query('SELECT * FROM topics where _category = $1',  [req.params.id], (error, results) => {
		if (error){
			console.log(error)
		}
		res.status(200).json(results.rows);
	})
};

// Update topic by ID
exports.updateTopic = (req, res, next) => {

	pool.query('UPDATE topics SET name = $1', (req.body.name), (error, results) => {
		if (error){
			console.log(error)
		}
		res.status(200).json();
	})
}; 

// Delete topic by ID
exports.deleteTopics = (req, res, next) => {
	pool.query('DELETE FROM topics WHERE name = $1', (req.body.name), (error, results) => {
		if (error){
			console.log(error)
		}
		res.status(200).json();
	})
}; 