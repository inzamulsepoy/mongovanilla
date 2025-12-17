const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 5000;

/* ======================
   Middleware
====================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ======================
   Serve HTML
====================== */
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/* ======================
   MongoDB Connection
====================== */
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => {
        console.log("MongoDB connected");
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error(err));

/* ======================
   Schema & Model
====================== */
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/* 
Model name: User
Collection name: users (forced)
*/
const User = mongoose.model('User', userSchema, 'users');

/* ======================
   POST Route
====================== */
app.post('/submit', async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "All fields required" });
        }

        const user = new User({ name, email });
        await user.save();

        res.status(201).json({ message: "User saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
