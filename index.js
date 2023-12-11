const express = require("express")
const app = express()
const router = require("./router")
const errMiddleware = require("./middlewares/Error")

app.use(express.json())
app.use("/", router)
app.use(errMiddleware)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`app started in ${PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()