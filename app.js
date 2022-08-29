//importar as configs do servidor
const {app,porta} = require('./config/servidor')

app.listen(porta,()=>{
    console.log("http://localhost:"+porta)
})

