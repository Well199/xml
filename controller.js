const Service = require('./service')

const Controller = {

    async retornoPfacil (req, res){

        let { codigo, transacao, status, subtotal, acrescimo, desconto, frete, forma_pagamento, parcelas, custo, postToken } = req.body

        if(!codigo){
            res.json({status: 200, message: "Código não enviado"})
            return;
        }

        await Service.insertPfacilData(parseInt(codigo), transacao, status, parseFloat(subtotal), parseFloat(acrescimo), parseFloat(desconto), parseFloat(frete), forma_pagamento, parseInt(parcelas), parseFloat(custo), postToken)
        
        res.json({status: 200, message: "ok"})
    },

}

module.exports = Controller