const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb://localhost:27017/expensetracker').then( function(client) {
        dbConnection = client.db()
        callBack()
    })
}

function getDb() {
    return dbConnection
}

// Exporting the required functions
module.exports = {connectToDb, getDb}
