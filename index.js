const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const todos = ['repay Edwin someday', 'punch Morgan'];




app.use(cors());
app.use(express.json({extended: true}));

app.get('/', (req, res)=> {
    res.redirect('/todos')
})

app.delete('/todos', (req, res) => {
 console.log(req.body);
} )

app.get('/todos',(req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

