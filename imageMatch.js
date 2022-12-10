const cards = document.querySelectorAll('.image-card');

let hasFlippedCard = false;
let lockBoard = false;
let card1, card2;

function cardFlip() {
  if (lockBoard) return;
  if (this === card1) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    card1 = this;

    return;
  }

  // second click
  card2 = this;
  var value=document.getElementById('trials').innerHTML;
  var new_count=(value.charAt(value.length - 1)-'0') - 1;
  var new_value=value.substring(0, value.length - 1)+new_count;
  document.getElementById('trials').innerHTML=new_value;
  match_check();
  if(checkfortrials()){
    alert("Game Over");
    window.location.reload();
  }
}

function checkfortrials(){
  var value=document.getElementById('trials').innerHTML;
  var count=value.charAt(value.length - 1)-'0';
  console.log(count==0);
  return count==0;
}

function match_check() {
  let isMatch = card1.dataset.framework === card2.dataset.framework;

  isMatch ? disableCards() : uncardFlips();
}

function disableCards() {
  card1.removeEventListener('click', cardFlip);
  card2.removeEventListener('click', cardFlip);

  reset();
}

function uncardFlips() {
  lockBoard = true;

  setTimeout(() => {
    card1.classList.remove('flip');
    card2.classList.remove('flip');

    reset();
  }, 1000);
}

function reset() {
  [hasFlippedCard, lockBoard] = [false, false];
  [card1, card2] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', cardFlip));