import { Robo } from "../modelo/robo";

export interface DirecaoStrategy{
     ir(robo : Robo) : void 
}