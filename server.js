const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const storiesRoutes = require('./routes/storiesRoutes');
const errorHandler = require('./middlewares/errorHandler');
const controller = require('./controllers/storiesController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', controller.showHome); 

app.use('/stories', storiesRoutes);

app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
