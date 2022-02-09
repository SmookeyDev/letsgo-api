import { app } from "../helpers/express";
import { createToken } from "./functions/createToken";
import { insertContact } from "./functions/insertContact";

app.post('/api/createToken', createToken);
app.post('/api/insertContact', insertContact);