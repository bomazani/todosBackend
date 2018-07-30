const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let todos = ['repay Edwin someday', 'punch Morgan'];


app.use(cors());
app.use(express.json({extended: true}));

app.get('/', (req, res)=> {
    res.redirect('/todos')
});

app.delete('/todos', (req, res) => {
    todos = todos.filter((todos, index) => {
        return !req.body.delete.includes(index);
    });
    res.end();
} )

app.get('/todos',(req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

