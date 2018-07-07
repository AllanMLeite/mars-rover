export enum DirecaoRoboEnum {
    N = "N",
	S = "S",
	L = "L",
    O = "O"
}

const keys = Object.keys(DirecaoRoboEnum)

export function getDirecaoEnumfromValue(value : String ) : DirecaoRoboEnum {
    let direcaoEnum = DirecaoRoboEnum[keys.find(x => x == value)]

    if(direcaoEnum == undefined)
        throw new Error("Direção inválida.")

    return direcaoEnum
}

