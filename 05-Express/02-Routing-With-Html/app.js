let express = require('express');
let app = express();

app.get('/',()=>{
res.send('EXPRESS ROUTING..!')
})
app.listen(3000)