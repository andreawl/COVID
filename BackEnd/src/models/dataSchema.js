module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define(
        'Data',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            dataNotificacao: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataPrimSintomas: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataTeste: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            dataObito: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            dataNascimento: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            faixaEtaria: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sexo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bairro: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            unidadeSaude: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tipoTeste: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dorGarganta: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            dispineia: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            febre: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            tosse: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            uti: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false, // Cria as colunas updatedAt e createdAt
        },
    );

    return Data;
};
