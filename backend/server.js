const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const clientRoutes = require('./routes/auth'); // or client if renamed

const app = express();
const PORT = process.env.PORT || 5000;
const orderRoutes = require("./routes/order"); 

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));       // ⬅️ increase JSON size
app.use(express.urlencoded({ limit: '10mb', extended: true })); // ⬅️ for form data


// Routes
app.use('/api/client', clientRoutes);
app.use("/api/orders", orderRoutes);
// MongoDB Connection (NO deprecated options!)
mongoose.connect('mongodb+srv://preethikas22csd:preethi@cluster0.olfxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log('MongoDB connection failed', err));
