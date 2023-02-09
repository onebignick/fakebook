const express = require('express');
const cors = require('cors');

const port = 5000;
const app = express();

app.use(cors())
app.use(express.json())

app.post('/sign-up', (request, response) => {
    console.log(request.body);
})

app.listen(port, () => console.log(`running on http://localhost:${port}`));