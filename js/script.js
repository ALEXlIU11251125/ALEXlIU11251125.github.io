const emojis = ['😍', '😍', '❤️', '❤️', '😵', '😵', '😭', '😭', '😎', '😎', '😃', '😃', '🤮', '🤮', '👍', '👍'];
const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

for (let i = 0; i < emojis.length; i++) {
  const box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffledEmojis[i];

  box.onclick = function() {
    this.classList.add('boxOpen');

    setTimeout(() => {
      const openBoxes = document.querySelectorAll('.boxOpen');
      if (openBoxes.length > 1) {
        if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
          openBoxes[0].classList.add('boxMatch');
          openBoxes[1].classList.add('boxMatch');

          openBoxes[0].classList.remove('boxOpen');
          openBoxes[1].classList.remove('boxOpen');

          if (document.querySelectorAll('.boxMatch').length === emojis.length) {
            alert('你赢了');
          }
        } else {
          setTimeout(() => {
            openBoxes[0].classList.remove('boxOpen');
            openBoxes[1].classList.remove('boxOpen');
          }, 500);
        }
      }
    }, 500);
  };

  document.querySelector('.game').appendChild(box);
}
