import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { generateToken } from './modules';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors(), helmet(), morgan('dev'), json(), urlencoded({ extended: true }));

app.post('/subscribe', (req, res) => {

    const { appointment_id, user_id } = req.body;

    console.log(req.body);

    if (!appointment_id) {
        res.status(400).send('Missing id');
        return;
    }

    // add random channel name
    const channel = 'ch-' + appointment_id;

    const token = generateToken(channel, user_id);

    res.send({ token, channel });
});

app.listen(port, () => {
    console.log('Example app listening on port: ' + port);
});
