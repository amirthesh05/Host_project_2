let guess = (Math.floor(Math.random() * 100 + 1))
console.log(guess)
let count = 0
let game_status = 1
const hints = document.getElementById('hints')
const attempts = document.getElementById('attempt')

function check() {
    if (game_status == 1) {
        let val = document.forms[0]['val'].value
        console.log(val)
        count++
        if (val == guess) {
            hints.innerHTML = 'GUESS IS CORRECT'
            attempts.innerHTML = 'Attempts :' + count
            game_status = 0;
            document.getElementById('check_btn').innerHTML = 'reset'
        }
        else if (val < guess) {
            hints.innerHTML = 'GUESS IS LOWER'
            attempts.innerHTML = 'Attempts :' + count
        }
        else {
            hints.innerHTML = 'GUESS IS HIGHER'
            attempts.innerHTML = 'Attempts :' + count
        }
    }
    else {
        console.log('Game over')
        reset()
        game_status = 1
    }
}
function reset() {
    document.getElementById('check_btn').innerHTML = 'Check'
    guess = (Math.floor(Math.random() * 100 + 1))
    console.log(guess)
    count = 0
    attempts.innerHTML = 'Attempts :' + count

}