import { app } from "./app";
import cors from 'cors';

app.use(cors());


app.listen(3333, () => console.log("Server is running"))