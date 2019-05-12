// Choix du nom des joueurs

const myPlayer = (playerId) => {
    let player = prompt('Bonjour Joueur 1, Quel est votre nom?');
    if(player != null){
        document.getElementById(playerId).innerHTML = player;
        console.log(player)
    };
}

window.onload = function() {
   myPlayer('firstPlayer');
   myPlayer('secondPlayer');
}
