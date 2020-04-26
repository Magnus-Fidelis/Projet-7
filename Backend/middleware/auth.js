const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {

		const token = req.headers.authorization.split(' ')[1];
		const decodedToken = jwt.verify(token, 'si@fks3rUAf@wNx$89b$v%Q^&#U#!g6pX4J#rvqo%8te#AoCLX7pueDLCLHe%hMa%QHTuf&jEm*8MLcM3cMkPC46z^EP7CmYg9t^9DJ!ZaVPRoD6dC&3sGLj2SXfD7z5');
		const userId = decodedToken.userId;
		const userAccountType = decodedToken.accountType;

    if (req.body.userId && req.body.userId !== userId) {
			throw 'Invalid user ID';
		} else if ( userAccountType < 2 ){
			throw 'Not user';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};