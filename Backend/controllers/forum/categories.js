const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'forum',
  password: 'mS2fwR8K4zwHZ5$h3thjy*7bzk9dsZ',
	port: 5432,
	client_encoding: 'UTF8',
})

exports.getCategory = (req, res, next) => {
	pool.query('SELECT * FROM categories', (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})
}

exports.createCategory = (req, res, next) => {
	let name = req.body.name;
	let nameReg = /^[a-zA-Z\-]+$/; 
	if (!(name).match(nameReg) ) {
		console.log(req, "Tentative d'intrusion")
	}
	else 
	{


	pool.query('INSERT INTO categories (name, category_uid) VALUES ($1, uuid_generate_v4())', [req.body.name], (error, results) => {
		if (error){
			console.log('Erreur de création de catégorie', error);
		}
		return res.status(200).json({message: "Catégorie crée avec succès"})
	})
}
} 

exports.getCategoryById = (req, res, next) => {

	pool.query('SELECT * FROM topics WHERE category_uid =$1', [req.body.id], (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json(results.rows);
	})

};
 

exports.updateCategory = (req, res, next) =>
{
	pool.query('UPDATE categories SET name = $1', (req.body.name), (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}

					
exports.deleteCategory = (req, res, next) => {

	pool.query('DELETE FROM categories WHERE name = $1', (req.body.name), (error, results) => {
		if (error){
			throw error
		}
		res.status(200).json();
	})
}