import { Forro } from "./appControllers/Forro.mjs";
import { Parede } from "./appControllers/Parede.mjs";
import { CoParede } from "./appControllers/CoParede.mjs";

const forro = new Forro();
const parede = new Parede();
const coParede = new CoParede();

forro.calcForro();
parede.calcParede();
coParede.calcCoParede();
