const { sequelize, Pedido } = require('../models');

Pedido.findAll({ include: ['usuario'] }).then(
    data => {
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)