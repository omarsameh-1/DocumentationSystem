const express = require('express')
const app = express()


app.use(express.static('./dist/documentation-system'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/documentation-system'});
});

app.listen(process.env.PORT || 8080);