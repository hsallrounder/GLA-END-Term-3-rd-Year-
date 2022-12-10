const cards = document.querySelectorAll('.image-card');

let hasFlippedCard = false;
let lockBoard = false;
let card1, card2;
let pairs_count=0;

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
  if(!match_check()){
    var value=document.getElementById('trials').innerHTML;
    var new_count=(value.charAt(value.length - 1)-'0') - 1;
    var new_value=value.substring(0, value.length - 1)+new_count;
    document.getElementById('trials').innerHTML=new_value;
    if(checkfortrials()){
      pairs_count=0;
      alert("Game Over");
      window.location.reload();
    }
  }
  if(pairs_count==6) alert("You Have Won The Game")
}

function checkfortrials(){
  var value=document.getElementById('trials').innerHTML;
  var count=value.charAt(value.length - 1)-'0';
  return count==0;
}

function match_check() {
  let isMatch = card1.dataset.framework === card2.dataset.framework;
  if(isMatch) pairs_count++;
  isMatch ? disableCards() : uncardFlips();
  return isMatch;
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