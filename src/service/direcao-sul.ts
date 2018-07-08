import { DirecaoStrategy } from "./direcao-strategy";
import { Robo } from "../modelo/robo";

export class DirecaoSul implements DirecaoStrategy {

    ir(robo : Robo){
        robo.incrementarY()
    }
}