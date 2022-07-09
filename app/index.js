const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const taskRouter = require('./routes/tasks.routes');

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// handling errors
app.use((error, request, response, next) => {
    return response.status(500).json({
      status: "error",
      message: error.message,
    });
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
app.use(taskRouter);

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
