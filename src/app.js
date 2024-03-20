const express = require('express');
const {connector} = require('./database/conexion');
const userRoute = require('./routes/userRoute');
const PORT = 3000;

connector();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', userRoute);
app.use('/login', userRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

