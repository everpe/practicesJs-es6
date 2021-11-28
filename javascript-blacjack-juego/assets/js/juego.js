

//Se crea un scope sin identificador al crear función anómina, autoinvocada.
const miModulo=(()=>{
    'use strict' //recomendado para este patrón módulo

    let deck = [];
    const   tipos = ['C','D','H','S'],
            especiales = ['A','J','Q','K'];

    // Referencia html
    const btnPedir= document.querySelector('#btn-pedir');
    const btnDetener= document.querySelector('#btn-detener');
    const btnNuevo= document.querySelector('#btn-nuevo');

    let puntosJugadores = [];

    const  divCartasJugadores = document.querySelectorAll('.divCartas'),
            punotsHtml = document.querySelectorAll('small');
            //smalls html de puntaje
    const inicializarJuego = ( numJugadores = 2 ) =>{
        deck = crearDeck();
        puntosJugadores=[];
        for(let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
        //Pone en 0 los puntos graficamente
        punotsHtml.forEach( ele => ele.innerText=0);
        divCartasJugadores.forEach( ele => ele.innerHTML = '');; 
            btnPedir.disabled = false;   
            btnDetener.disabled = false;
    }
    //Crea nueva baraja  y la revuelve.
    const crearDeck = () => {
        deck=[];
        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                deck.push( i + tipo);
            }
        }
        //Cartas no numericas
        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push( esp + tipo);
            }
        }
        //revuelve la baraja(library)
        return _.shuffle( deck );
    }
    //Toma una carta de la baraja la quita y devuelve
    const pedirCarta = () =>{
        if(deck.length === 0){
            throw "No hay cartas en la baraja";
        }
        return deck.pop();
    }

    // valor equivalente de una carta tomada de la baraja](deck)
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length-1);
        //check is Not a Number
        return isNaN(valor) ?
                (valor==='A') ? 11 : 10 
                :  valor * 1;
    }
    //Turno 0 = jugador1, último = PC
    const acumularPuntos = (carta, turno)=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        punotsHtml[turno].innerText = puntosJugadores[turno];
        return  puntosJugadores[turno];
    };
    //Crear las cartas graficamente en html
    const pintarCarta = (carta, turno) =>{
      const imgCarta= document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`
      imgCarta.classList.add('carta')
      divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = ()=>{
        //desestructurando en función de las posiciones del arrreglo
        const [ puntosMinimos, puntosPC ] = puntosJugadores;
        setTimeout(()=>{
            if(puntosPC===puntosMinimos){
                alert('Empatados');
            }else if(puntosPC > 21){
                alert('Ganó el jugador');
            }else if(puntosMinimos > 21){
                alert('computador Ganó');
            }else{
                alert('computador Ganó');
            }
        },100);
    };
    //Lógica turno de la computadora
    const turnoPC = (puntosMinimos)=> {
        let puntosPC
        do{
            const carta = pedirCarta();
            puntosPC=acumularPuntos(carta, puntosJugadores.length-1);
            pintarCarta(carta, puntosJugadores.length-1);        
        }while( (puntosPC<puntosMinimos)&& puntosMinimos<=21 );
        determinarGanador();
    };
    
    
    //Events to play
    //Acción pedir carta
    btnPedir.addEventListener('click',  ()=>{
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        
        //Crear las cartas en html
        pintarCarta(carta, 0);
        
        //Validar gana-pierde
        if( puntosJugador > 21){
            console.warn('Lo siento ha perdido');
            btnPedir.disabled = true;
            btnDetener.disabled=true;
            turnoPC(puntosJugador);
        }else if(puntosJugador === 21){
            console.warn('21, GENIAL');
            btnPedir.disabled = true;
            btnDetener.disabled=true;
            turnoPC(puntosJugador);
        }
    });
    
    btnDetener.addEventListener('click',  ()=>{
        btnPedir.disabled=true;
        btnDetener.disabled=true;
        turnoPC(puntosJugadores[0]);
    });
    
    btnNuevo.addEventListener('click',  ()=>{
        inicializarJuego();
    });


    //Forma de hacer accesible una funciíon o propiedad de esete modulo autoinvocado:
    return{
        nuevoJuego: inicializarJuego
    };
})();


///////////////////////////////////////Notes//////////////////////////////
    // document.getElementById('cartas-computadora')
    // document.getElementsByClassName('carta')
    // const a = document.querySelector('.title')
    // undefined
    // a.innerText = 'Manipulado';
    // const buton= document.createElement('button');
    // buton.innerText='Destroy World';
    // buton.classList.add('btn-success');
