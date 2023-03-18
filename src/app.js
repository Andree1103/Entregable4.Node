const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const userRoute = require('./routes/user.routes')
const converRoute= require('./routes/conversation.routes')
const partiRoute= require('./routes/participants.routes')
const messRoute = require('./routes/messages.routes')
const autRoute= require('./routes/auth.routes')
const initModels = require("./models/init.models")
const errorHandlerRouter = require('./routes/errorHandler.routes')

const app = express()
initModels();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



db.authenticate()
.then(() =>{
  console.log("base de datos actualizada")
})
.catch((error) => { console.log(error);})

db.sync({force:false})
.then(() => console.log("base de datos async"))
.catch((error) => console.log(error))

const PORT = 8000

app.use(userRoute)
app.use(converRoute)
app.use(partiRoute)
app.use(messRoute)
app.use(autRoute)

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

errorHandlerRouter(app);

app.listen(PORT,() =>{
  console.log(`servidor funcionando en el puerto ${PORT}`);
})