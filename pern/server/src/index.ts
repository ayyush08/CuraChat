import express from 'express';
import authRoutes from '../src/routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes)

app.listen(5000, () => {
    console.log('Server  running on port 5000');
});