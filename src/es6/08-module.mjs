//para que javascript puede interpretar modulos hay dos formas de hacerlo
//1. agregando en la extension .mjs
//2. en el package.json de node, agregar la siguiente linea "type": "module"

import hello from "./module.mjs";

hello();