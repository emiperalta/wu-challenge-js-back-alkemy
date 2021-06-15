require('./database');
const { app } = require('./app');
const { PORT } = require('./config/keys');

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
