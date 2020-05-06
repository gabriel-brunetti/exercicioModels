const Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define(
        'Endereco',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING,
                allowNull: true
            },
            numero: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            complemento: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cep: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            UF: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "endereco",
            timestamps: false
        }
    )

    endereco.associate = (models) => {
        endereco.belongsTo(models.Usuario, { foreignKey: 'fk_usuario', as: 'usuario' });
    };

    return endereco;
}

module.exports = Endereco;