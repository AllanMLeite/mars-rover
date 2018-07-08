import { DirecaoEnum, getDirecaoEnumfromValue } from "./direcao-enum"
import { DirecaoStrategy } from "../service/direcao-strategy";

 export class Robo{

    x : number
	y : number
	limiteSuperiorY : number = 10
	limiteSuperiorX : number = 10
	limiteInferiorY : number = 1
	limiteInferiorX : number = 1

	constructor(x : number, y : number) {
		this.x = x
		this.y = y
	}

	ir(direcao : any) {
		let strategy : DirecaoStrategy = direcao.servico
		strategy.ir(this)
	}

	andar(passos : String) {
        let caminho : String[] = passos.split(",")
        caminho.forEach(x => this.ir(getDirecaoEnumfromValue(x)))
	}

	incrementarY() {
		this.validarLimiteSuperiorY()
		this.y++		
	}

	decrementarY() {
		this.validarLimiteInferiorY()
		this.y--		
	}

	incrementarX() {
		this.validarLimiteSuperiorX()
		this.x++
	}

	decrementarX() {
		this.validarLimiteInferiorX()
		this.x--
	}
	
	public getX() {
		return this.x
	}

	public getY() {
		return this.y
	}
	
	private validarLimiteSuperiorY() {
		if (this.y == this.limiteSuperiorY)
			throw new Error("Limite Superior Y inválido.")
	}
	
	private validarLimiteInferiorY() {
		if (this.y == this.limiteInferiorY)
			throw new Error("Limite Inferior Y inválido.")
	}
	
	private validarLimiteSuperiorX() {
		if (this.x == this.limiteSuperiorX)
			throw new Error("Limite Superior X inválido.")
	}
	
	private validarLimiteInferiorX() {
		if (this.x == this.limiteInferiorX)
			throw new Error("Limite Inferior X inválido.")
	}
}