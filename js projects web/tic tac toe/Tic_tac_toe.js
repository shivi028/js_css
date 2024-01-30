let boxes = document.querySelectorAll('.box')
let reset_btn = document.querySelector('.reset')
let newgamebtn = document.querySelector('#newgame')
let message_cont = document.querySelector('.message')
let message = document.querySelector('#msg')

let turn_O = true
const winner = [
    [0, 1, 2],
    [1, 4, 7],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]


const resetgame = () =>{
    turn_O = true
    enablebox()
    message_cont.classList.add('hide')
}

const disablebox = ()=>{
    // after the first pattern matches end the current game
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = ()=>{
    for (let box of boxes)
    {
        box.disabled = false
        box.innerText = ''
    }
}

boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        console.log('button was clicked')

        if(turn_O === true){
            box.innerHTML = 'O'
            box.style.color = 'green'
            turn_O = false
        }
        else{
            box.innerHTML = 'X'
            box.style.color = 'rgb(242, 106, 9)'
            turn_O = true
        }
        // no one can change the value again
        box.disabled = true
        checkwinner();
    })
})

const show_winner = (winner) =>{
    message.innerText = `congratulation, winner is ${winner}`
    message_cont.classList.remove('hide');
    disablebox();
}

const checkwinner = () =>{
    for (let pattern of winner) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log('winner', pos1val);

                // displaying the name
                show_winner(pos1val)
            }
        }
    }
};

newgamebtn.addEventListener('click', resetgame)
reset_btn.addEventListener('click', resetgame)

