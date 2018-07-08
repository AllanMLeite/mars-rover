import { DirecaoStrategy } from "./direcao-strategy";
import { Robo } from "../modelo/robo";

export class DirecaoOeste implements DirecaoStrategy {

    ir(robo : Robo){
        robo.decrementarX()
    }
}