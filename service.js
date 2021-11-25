const db = require('./db')

module.exports = {

    add: (name, email) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO users (nome, email, created_at) VALUES (?, ?, (CURRENT_TIMESTAMP))', 
            [name, email], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.insertId)
            })
        })
    },

}