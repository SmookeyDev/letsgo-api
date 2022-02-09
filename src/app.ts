import { app } from './helpers/express';
import dotenv from 'dotenv';
import "./routes/index";

dotenv.config();

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server running on http://127.0.0.1:${port}`));