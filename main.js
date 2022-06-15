const snorlax = document.getElementById('snorlax');
const blast = document.getElementById('blast');
const score = document.getElementById('score');
// Defining of jump function and attach animation class from CSS
// Each time Snorlax jumps, this function removes the jump animation soon after
function jump() {
    snorlax.classList.add('jump-animate')
    setTimeout(() => {
        snorlax.classList.remove('jump-animate')
    }, 500)
};

// Use jump function at any keypress
// Call jump function after keypress
document.addEventListener('keypress', () => {
    if (!snorlax.classList.contains('jump-animate')) // If Snorlax isn't already jumping, then jump (Jump cannot be initiated until landing)
    jump();
});

// Detection of blast hitting Snorlax in game loop / Updates state of game 
setInterval(() => {
    score.innerText++; // increment score every game
    const snorlaxTop = parseInt(window.getComputedStyle(snorlax).getPropertyValue('top')) // Snorlax postition at top in px
    // console.log(dinoTop)
    const blastLeft = parseInt(window.getComputedStyle(blast).getPropertyValue('left')) // Blast postition at top in px
    // console.log(rockLeft)

    // Blast should only be visible if value of rockLeft is positive
    // Blast also needs to reappear
    if (blastLeft < 0) {
        blast.style.display = 'none'; // Leaves screen
    } else {
        blast.style.display = ''; // Returns
    }

    // Collision detection between Snorlax and blast
    // Check if blast is in last 50px of screen, if so, determine if Snorlax is on the ground or jumping 
    // If Snorlax is on ground at collision, game is over
    if (blastLeft < 50 && blastLeft > 0 && snorlaxTop > 150) {
        alert("You lose! Your score is: " + score.innerText + "\n\nPlay again?")
        location.reload(); // Refresh page to play again
    }
}, 50);