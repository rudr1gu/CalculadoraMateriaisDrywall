import { Forro } from "./appControllers/Forro.js";
import { Parede } from "./appControllers/Parede.js";
import { CoParede } from "./appControllers/CoParede.js";

const forro = new Forro();
const parede = new Parede();
const coParede = new CoParede();

forro.calcForro();
parede.calcParede();
coParede.calcCoParede();
