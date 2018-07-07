export enum DirecaoRoboEnum {
    N = "N",
	S = "S",
	L = "L",
    O = "O"
}

export function getDirecaoEnumfromValue(value : String ) : DirecaoRoboEnum {
    const keys = Object.keys(DirecaoRoboEnum)
    return DirecaoRoboEnum[keys.find(x => x == value)]
}

