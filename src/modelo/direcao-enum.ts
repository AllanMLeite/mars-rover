import { DirecaoNorte } from "../service/direcao-norte";
import { DirecaoSul } from "../service/direcao-sul";
import { DirecaoLeste } from "../service/direcao-leste";
import { DirecaoOeste } from "../service/direcao-oeste";

export const DirecaoEnum : any[] = [
    {codigo:'N', descricao:"Norte", servico: new DirecaoNorte},
    {codigo:'S', descricao:"Sul", servico: new DirecaoSul},
    {codigo:'L', descricao:"Leste", servico: new DirecaoLeste},
    {codigo:'O', descricao:"Oeste", servico: new DirecaoOeste}
]

export function getDirecaoEnumfromValue(value : String ) : any {
    let direcaoEnum = DirecaoEnum.find(x => x.codigo == value)

    if(direcaoEnum == undefined)
        throw new Error("Direção inválida.")

    return direcaoEnum
}

