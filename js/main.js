
function createGame(player1, hour, player2) { 
    return`
  <li>
        <img src="./assets/flags/icon=${player1}.svg" >
        <strong>${hour}</strong>
        <img src="./assets/flags//icon=${player2}.svg" >
 </li>
    
    `
}

let delay = -0.3;

function createCard(data, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${data}<span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
</div>
    `
}


document.querySelector("#cards").innerHTML = 

   createCard('24/11', 'Quinta', 
   createGame('switzerland', '07:00', 'cameroon') +
   createGame('uruguay', '10:00', 'south korea') +
   createGame('portugal', '13:00', 'ghana') +
   createGame('brazil', '16:00', 'serbia') 
   ) + 
   createCard('28/11', 'Segunda', 
   createGame( 'cameroon', '07:00', 'serbia') +
   createGame( 'south korea', '10:00', 'ghana') +
   createGame( 'brazil', '13:00', 'switzerland') +
    createGame( 'portugal', '16:00', 'uruguay')
   ) +
   createCard('02/12', 'Sexta', 
   createGame( 'south korea', '12:00', 'portugal') +
   createGame( 'ghana', '12:00', 'uruguay') +
   createGame( 'serbia', '16:00', 'switzerland') +
   createGame( 'brazil', '16:00', 'cameroon')
   )