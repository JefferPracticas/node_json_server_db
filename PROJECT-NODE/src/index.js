
//Librerias dotenv para variables de entorno
//Libreria env-var para requerir y numerico
import { config } from "dotenv";
import env  from 'env-var';
config()
const PORT = env.get('PORT').required().asPortNumber()


console.log(process.env.PORT)
console.log(PORT)
