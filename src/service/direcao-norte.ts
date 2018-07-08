import { DirecaoStrategy } from "./direcao-strategy";
import { Robo } from "../modelo/robo";

export class DirecaoNorte implements DirecaoStrategy {

    ir(robo : Robo){
        robo.decrementarY()
    }
}