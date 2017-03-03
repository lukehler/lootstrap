var express = require( 'express' ),
	app = express(),
	port = process.env.PORT || 3000; // listen to $PORT for use with Hotel, or just use a default

// And serve up anything in the public folder.
app.use( express.static( 'dest' ) );

// And, finally, fire it off.
app.listen( port );