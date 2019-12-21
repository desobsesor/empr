//#region CONFIGURACIÓN MONGODB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// DB config 
const db = require("./keys").mongoURI;

//const options = { server: { socketOptions: { connectTimeoutMS: 60000 }}};
const options = {
    //useFindAndModify: true, //is not supported
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 6000, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 60000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 60000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect(db, options)
    .then(() =>
        console.log('La conexión con MongoDB se ha establecido exitosamente!...')
    ).catch( err =>
        console.log('No se ha podido establecer la conexión con MongoDB', err.message)
    );

module.exports = mongoose.connection;  
module.exports.urlMongo = db;
//#endregion
