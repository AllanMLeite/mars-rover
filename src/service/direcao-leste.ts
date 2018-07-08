import { DirecaoStrategy } from "./direcao-strategy";
import { Robo } from "../modelo/robo";

export class DirecaoLeste implements DirecaoStrategy {

    ir(robo : Robo){
        robo.incrementarX()
    }
}