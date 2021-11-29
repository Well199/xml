const db = require('./db')

module.exports = {

    objectsAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM retorno_pfacil', (error, results) => {
                if(error) { reject(error); return;}
                resolve(results)
            })
        })
    },

    insertPfacilData: (codigo, transacao, status, subtotal, acrescimo, desconto, frete, forma_pagamento, parcelas, custo, postToken) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO retorno_pfacil (codigo, transacao, status, subtotal, acrescimo, desconto, frete, forma_pagamento, parcelas, custo, postToken) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [codigo, transacao, status, subtotal, acrescimo, desconto, frete, forma_pagamento, parcelas, custo, postToken], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.insertId)
            })
        })
    },
}
