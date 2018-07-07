import { DirecaoRoboEnum, getDirecaoEnumfromValue } from "./direcao-robo-enum";

 export class Robo{

    x : number;
	y : number;
	limiteSuperiorY : number = 10;
	limiteSuperiorX : number = 10;
	limiteInferiorY : number = 1;
	limiteInferiorX : number = 1;

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	ir(direcao : DirecaoRoboEnum) {
        switch (direcao) {
            case DirecaoRoboEnum.N:
                this.decrementarY();                
                break;        
            case DirecaoRoboEnum.S:
                this.incrementarY();                
                break;        
            case DirecaoRoboEnum.L:
                this.incrementarX();                
                break;        
            case DirecaoRoboEnum.O:
                this.decrementarX();                
                break;        
            default:
                break;
        }
	}

	andar(passos : String) {
        let caminho : String[] = passos.split(",")
        caminho.forEach(x => this.ir(getDirecaoEnumfromValue(x)))
	}

	incrementarY() {
		this.validarLimiteSuperiorY();
		this.y++;		
	}

	decrementarY() {
		this.validarLimiteInferiorY();
		this.y--;
		
	}

	incrementarX() {
		this.validarLimiteSuperiorX();
		this.x++;
	}

	decrementarX() {
		this.validarLimiteInferiorX();
		this.x--;
	}
	
	public getX() {
		return this.x;
	}

	public getY() {
		return this.y;
	}
	
	private validarLimiteSuperiorY() {
		if (this.y == this.limiteSuperiorY)
			throw new Error("Limite Superior Y inválido.");
	}
	
	private validarLimiteInferiorY() {
		if (this.y == this.limiteInferiorY)
			throw new Error("Limite Inferior Y inválido.");
	}
	
	private validarLimiteSuperiorX() {
		if (this.x == this.limiteSuperiorX)
			throw new Error("Limite Superior X inválido.");
	}
	
	private validarLimiteInferiorX() {
		if (this.x == this.limiteInferiorX)
			throw new Error("Limite Inferior X inválido.");
	}
}