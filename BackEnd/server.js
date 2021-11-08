/* usa a biblioteca para aceitar parametros no .env do root */
require('dotenv').config();

/* faz conexao com o BD */
const { stablishConnection, syncModels } = require('./src/models');

async function initializeServer() {
    const sequelize = await stablishConnection()
    await syncModels(sequelize)
    await sequelize.sync()

    const app = require('./src/app');

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, console.log(`Server online at localhost:${PORT}`));
}

initializeServer()