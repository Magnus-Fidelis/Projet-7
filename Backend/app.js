const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/forum/category')
const topicRoutes = require('./routes/forum/topic')
const subjectRoutes = require('./routes/forum/subject')
const messageRoutes = require('./routes/forum/messages')
const path = require('path')

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});


app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.use('/api/images', express.static(path.join(__dirname, '/images')));

app.use('/api/user', userRoutes);

app.use('/api/forum/', categoryRoutes)

app.use('/api/forum/topic', topicRoutes);

app.use('/api/forum/subject', subjectRoutes);

app.use('/api/forum/message', messageRoutes)

app.use(express.static(path.join(__dirname, 'dist/TrinityFall-Maquetage')))
app.use((req, res) =>{
	res.sendFile(path.join(__dirname, 'dist/TrinityFall-Maquetage/index.html' ))
})

/*
app.use('/api/forum/subject', subjectRoutes);
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
*/

module.exports = app;


