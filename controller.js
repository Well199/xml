const Service = require('./service')

const Controller = {

    async create (req, res) {

        let { name, email } = req.body

        if(!name || !email){
            res.json({status: 200, message: "Nome ou email não enviado"})
        }

        await Service.add(name, email)

        res.json({status: 200, message: "ok"})
    },

}

module.exports = Controller