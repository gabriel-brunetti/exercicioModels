const { sequelize, Endereco } = require('../models');

Endereco.findAll({ include: ['usuario'] }).then(
    data => {
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)