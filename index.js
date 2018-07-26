const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const todos = ['repay Edwin someday', 'punch Morgan'];




app.use(cors());

app.get('/', (req, res)=> {
    res.redirect('/todos')
})

app.get('/todos',(req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

