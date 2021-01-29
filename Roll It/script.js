'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentscore = 0;

btnRoll.addEventListener('click', function () {
  //generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check the no.
  if (dice !== 1) {
    //add player score
    currentscore += dice;
    current0.textContent = currentscore;
  } else {
    //switch to next player
  }
});
