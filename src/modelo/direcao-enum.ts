export enum DirecaoEnum {
    N = "N",
	S = "S",
	L = "L",
    O = "O"
}

const keys = Object.keys(DirecaoEnum)

export function getDirecaoEnumfromValue(value : String ) : DirecaoEnum {
    let direcaoEnum = DirecaoEnum[keys.find(x => x == value)]

    if(direcaoEnum == undefined)
        throw new Error("Direção inválida.")

    return direcaoEnum
}

