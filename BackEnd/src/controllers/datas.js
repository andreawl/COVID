const { v4: uuidv4 } = require('uuid')
const { validationResult } = require('express-validator');
const { Data } = require('../models');

module.exports = {
    createData: async (req, res) => {
        console.log('Create Data')
        const { dataNotificacao, dataPrimSintomas, dataTeste, dataObito, dataNascimento, faixaEtaria,sexo, cor, bairro, cidade,
              unidadeSaude, tipoTeste, dorGarganta, dispineia, febre, tosse, uti } = req.body;
        console.log(cidade, bairro)
        /* Validation  */
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(401).json({ ValidationErrors: errors.array() });

        /* User creating */
        try {
            const covidData = await Data.create(
                {
                    id: uuidv4(),
                    dataNotificacao,
                    dataPrimSintomas, 
                    dataTeste,
                    dataObito,
                    dataNascimento,
                    faixaEtaria,
                    sexo,
                    cor, 
                    bairro,
                    cidade,
                    unidadeSaude,
                    tipoTeste, 
                    dorGarganta,
                    dispineia,
                    febre, 
                    tosse,
                    uti,
                   
                },
            );

            return res.status(201).json({ covidData });
        } catch (erro) {
            return res.status(500).json({ UncaughtError: erro.message });
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();

        return res.status(200).json({ datas });
    },
};
