import Imprimivel from "../utils/imprimivel.js";
import Comparavel from "./comparavel.js";

interface Modelo<T> extends Imprimivel, Comparavel<T> {};
export default Modelo;