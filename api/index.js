const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    res.json({requestData:{username,password}});
});

// app.get('/test', (req, res) => {
//     res.json('Working');
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

//2nyhAQ6hhWXBEhLy

//mongodb + srv://ryanweidling:2nyhAQ6hhWXBEhLy@cluster0.acnrgwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0