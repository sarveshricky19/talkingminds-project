const express = require('express');
const bodyParser = require('body-parser');
const pointsRoutes = require('./routes/points');
const polygonsRoutes = require('./routes/polygons');

const app = express();
app.use(bodyParser.json());

app.use('/api', pointsRoutes);
app.use('/api', polygonsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
