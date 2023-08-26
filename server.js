require("dotenv").config();

const app = require('./app');


/* SERVER CONFIGURATIONS */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("Server Running on PORT", PORT));

/* ROUTES */
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Our Schedule and User APIs are authenticated now before reaching the controller
app.use("/api", require('./routes'));

/* This is a custom route for all the invalid routes */
app.use('*', function (req, res) {
    return res.status(400).json({
        message: 'invalid route',
        data: {}
    });
})


module.exports = app;