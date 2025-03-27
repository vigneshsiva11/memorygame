const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];

let match = 0;
let flippedcards = []
sufflecards()

const gameboard = document.getElementById('gameBoard')
displaycards()

function sufflecards() {
    for(let i =cardsArray.length-1;i>=0;i--) {
        const randind = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randind]] = [cardsArray[randind],cardsArray[i]]
    }
}

function displaycards() {
    cardsArray.forEach((curr,index,arr) => {
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameboard.append(card);
        card.addEventListener('click',flipcard);
    })
}


function flipcard() {
     if(flippedcards.length < 2 && this.classList.contains('active')) {
        let cardid = this.getAttribute('id');
        flippedcards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardid].icon;
         if(flippedcards.length==2) {
             setTimeout(checkmatch,500);
         }
     }
}

function checkmatch() {
     const card1id = flippedcards[0].getAttribute('id');
     const card2id = flippedcards[1].getAttribute('id');

     if(cardsArray[card1id].name===cardsArray[card2id].name) {
        flippedcards[0].style.border = 'none';
        flippedcards[0].style.backgroundColor = '#f5bae5';
        flippedcards[0].innerHTML = '';
        flippedcards[0].classList.remove('active');
        flippedcards[1].classList.remove('active');
        flippedcards[1].style.border = 'none';
        flippedcards[1].style.backgroundColor = '#f5bae5';
        flippedcards[1].innerHTML = '';
        match++;
        checkgameover();
     }
     else {
         flippedcards[0].innerHTML = '';
         flippedcards[0].classList.add('cardback');
         flippedcards[1].innerHTML = '';
         flippedcards[1].classList.add('cardback');
     }
     flippedcards = [];
}


function checkgameover()  {
    if(match==cardsArray.length/2) {
        while(gameboard.firstChild) {
            gameboard.removeChild(gameboard.firstChild)
        }
        gameboard.innerHTML = 'You Won';
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
}