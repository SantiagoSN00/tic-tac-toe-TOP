



const jugadoresTotales = () =>{
  this.jugadores = 0

  const resetPlayer = () =>{
    this.jugadores = 0
  }

  const getJugadores = () =>{
    return this.jugadores
  }

  const agregar = () =>{
    return this.jugadores++
  }

  return {resetPlayer,getJugadores,agregar}

}

let cantidad = jugadoresTotales()

const Player = (cant) => {
  cant.agregar()
  this.PlayerN = cant.getJugadores()
  console.log(this.PlayerN)
  let input = document.getElementById(`jugador${this.PlayerN}`).value
  console.log(input)
  let name = input
    this.getName = () => {return name}
    this.getCant = () =>{return cant.getJugadores()}

    return {getName,getCant,name};
  }
  

  const gameBoard = (() => {
          
    let Player1 = 'Jugador 1'
    let Player2 = 'Jugador 2'
    
    this.turnoN = 0
    this.board = []
    this.board.length = 9,
    this.board.fill('')
    
    this.init = () =>{
      this.showBoard();
      this.cacheDOM();
      this.clickCell();
      this.showPlayer()
    }
    this.showPlayer = () =>{
      console.log(this.Player1)
      console.log(this.Player2)
      return(this.Player1,this.Player2)
    }
    this.addPlayers = (a,b)=>{
      this.Player1 = a;
      this.Player2 = b;
    }
    this.cacheDOM = () =>{
      this.tablero = document.querySelector('.content')
      this.celdas = document.querySelectorAll('.cell')
      
    }
    this.clickCell = () =>{
      this.celdas.forEach(element => {
        element.addEventListener('click',paintCell)
      });
    }
    this.resetGame = () =>{
      this.turnoN = 0;
      this.board.fill('')
    }
    this.paintCell = (e) =>{

      // Evento de clickCell, se fija si la celda selecionada no tiene marca
      // y si no la tiene, crea un elemento con una marca dada por la primer
      // inicial del jugador correspondiente dependiendo del turno

      if(e.target.textContent === ''){
      let marca = document.createElement('p')
      posicion = e.target.id-1
      if(this.turnoN%2!==0){
      this.board[posicion]='X'
      marca.textContent = 'X'
      } else {
        marca.textContent = 'O'
        this.board[posicion]='O'
      }
      e.target.append(marca)
      this.turnoN++
      if(this.gano()){
      const jueguito = document.querySelector('.content')
            jueguito.classList.add('escondido')
        const anuncio = document.querySelector('.header')
        if(this.board[posicion] ==='X'){
          anuncio.innerHTML = `<h1>Gano ${this.Player2}!</h1>`
        }else anuncio.innerHTML = `<h1>Gano ${this.Player1}!</h1>`
      }
    }
    }
    this.gano = () =>{
      let gano = false
      cuadrado = this.board
      

        for(let i=0;i<3;i++){
          if(cuadrado[i*3]===cuadrado[1+i*3] && cuadrado[i*3] === cuadrado[2+i*3] && cuadrado[i*3]!==""){
            return(true)
          }
        }
        for(let i=0;i<3;i++){
          if(cuadrado[i]===cuadrado[3+i] && cuadrado[i] === cuadrado[6+i] && cuadrado[i]!==""){
            return(true)
          }
        }
        if(cuadrado[0]===cuadrado[4] && cuadrado[0] === cuadrado[8] && cuadrado[0]!==""){
          return(true)
        }
        if(cuadrado[2]===cuadrado[4] && cuadrado[2] === cuadrado[6] && cuadrado[2]!==""){
          return(true)
        }
        return gano;
    
  }
    this.showBoard = () =>{

      console.log(this.board)

    }
    return{init,board,addPlayers,showPlayer}
})()

const boton = document.querySelector('#empezar-juego')


function empezar(){
  
  let player1 = Player(cantidad)
  let player2 = Player(cantidad)
  const jueguito = document.querySelector('.content')
  const form = document.querySelector('.input-players')
  jueguito.classList.toggle('escondido')
  form.classList.toggle('escondido')
  gameBoard.addPlayers(player1.name,player2.name)
  gameBoard.init()
}

window.addEventListener("load", function() {
  boton.addEventListener('click',empezar)
});
