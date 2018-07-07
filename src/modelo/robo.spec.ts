import { Robo } from "./robo"
import { DirecaoRoboEnum } from "./direcao-robo-enum"

describe('RoboTest', () => {
  it('Deve ir para norte', () => {
    let marsRover =  new Robo(5,5)
		marsRover.andar(DirecaoRoboEnum.N.toString())
    expect(marsRover.getX()).toEqual(5)
    expect(marsRover.getY()).toEqual(4)
  })

  it('Deve percorrer um caminho ABC', () => {
    let marsRover =  new Robo(5,5)
		marsRover.andar("L,L,N,N,L,L")
    expect(marsRover.getX()).toEqual(9)
    expect(marsRover.getY()).toEqual(3)
  })

  it('Deve percorrer um caminho XYZ', () => {
    let marsRover =  new Robo(5,5)
		marsRover.andar("O,O,S,S,O,O")
    expect(marsRover.getX()).toEqual(1)
    expect(marsRover.getY()).toEqual(7)
  })

  it('Deve exibir mensagem ao ultrapassar limite Esquerdo', () => {
    let marsRover =  new Robo(1,1)
    expect(() => marsRover.andar("O")).toThrowError("Limite Inferior X inválido.")
  })

  it('Deve exibir mensagem ao ultrapassar limite direito', () => {
    let marsRover =  new Robo(10,1)
    expect(() => marsRover.andar("L")).toThrowError("Limite Superior X inválido.")
  })

  it('Deve exibir mensagem ao ultrapassar limite superior', () => {
    let marsRover =  new Robo(1,1)
    expect(() => marsRover.andar("N")).toThrowError("Limite Inferior Y inválido.")
  })

  it('Deve exibir mensagem ao ultrapassar limite inferior', () => {
    let marsRover =  new Robo(1,10)
    expect(() => marsRover.andar("S")).toThrowError("Limite Superior Y inválido.")
  })

  it('Deve percorrer um caminho extenso', () => {
    let marsRover =  new Robo(10, 10)
		marsRover.andar("O,O,O,O,O,O,O,O,O,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,S,O,S,O,S,O,S,O,S,O,S,O,S,O,S,O,S,O,N,L,N,L,N,L,N,L,N,L,N,L,N,L,N,L,N,L,O,O,O,O,O,O,O,O,O,L,S,L,S,L,S,L,S,L,S,L,S,L,S,L,S,L,S")
    expect(marsRover.getX()).toEqual(10)
    expect(marsRover.getY()).toEqual(10)
  })
})
