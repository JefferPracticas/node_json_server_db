
//Imports
import { getTitle, getAuthor} from "./functions.js"
import { curso } from "./object.js"

//Forma antigua de llamar importar
/* const { getTitle, getAuthor } = require('./functions')
const { curso } = require('./object') */

//exports
console.log(getTitle())
console.log(getAuthor('Ing. Jeffer Ruiz') )
console.log(curso)