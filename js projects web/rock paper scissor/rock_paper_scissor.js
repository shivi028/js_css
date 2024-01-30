let userscore = 0
let compscore = 0

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')
const user_message = document.querySelector('#user')
const comp_message = document.querySelector('#comp')
const userscorepara = document.querySelector('#user_score')
const computerscorepara = document.querySelector('#comp_score')


const generate_comp_choice = () => {
    let options = ['Rock', 'Paper', 'Scissors']
    let rand_int = Math.floor(Math.random() * 3)
    return options[rand_int];
}

const drawgame = () => {
    console.log('match draw')
    msg.innerText = 'Match Draw, Play Again!!'
    msg.style.backgroundColor = 'bisque';
    msg.style.color = ' brown';
}

const wingame = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log('You Won')
        msg.innerText = 'You Won'
        msg.style.backgroundColor = 'green';
        msg.style.color = 'white';
    }
    else {
        compscore++;
        computerscorepara.innerText = compscore;
        console.log('Computer Won')
        msg.innerText = 'Computer Won'
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
    }
}

const playgame = (user_choice) => {
    // console.log('choice was clicked', user_choice)
    // generate computer choice
    const comp_choice = generate_comp_choice();
    console.log('computer choice = ', comp_choice)
    comp_message.innerText = `computer choose ${comp_choice}`

    if (user_choice === comp_choice) {
        drawgame()
    }
    else {
        let userwin = true;
        if (user_choice === 'Rock') {
            userwin = comp_choice === 'Paper' ? false : true;
        }
        else if (user_choice === 'Paper') {
            userwin = comp_choice === 'Scissors' ? false : true;
        }
        else {
            userwin = comp_choice === 'Rock' ? false : true;
        }
        wingame(userwin);
    }
}

choices.forEach((choice) => {
    // console.log("choice")
    choice.addEventListener('click', () => {
        const user_choice = choice.getAttribute('id')
        console.log('user choice = ', user_choice)
        user_message.innerText = `You choose ${user_choice}`

        playgame(user_choice);
    })
})