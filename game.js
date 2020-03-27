const player1 = "X";
const player2 = "Y";
const playTime = player1;
var gameOver = false;

atualizarMostrador();
inicializarEspacos();

function atualizarMostrador(){    
    if(gameOver){ return; }/* acabou o jogo */
    if(playTime == player1){/* vez do player1 = x */
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "images/x.png");
    }else{/* vez do player2 = o */
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "images/o.png");
    }
}

function inicializarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if(gameOver){ return;}
            if(this.getElementsByTagName("img").length == 0){
                if(playTime == player1){
                    this.innerHTML = "<img src='images/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }else{
                    this.innerHTML = "<img src='images/o.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizarMostrador(); 
            }
        });
    }
}