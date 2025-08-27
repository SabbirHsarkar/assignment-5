
// Navbar elements
const loveText = document.querySelector('.love-text');
const coinText = document.querySelector('.coin-text');
const copyText = document.querySelector('.copy-content-nav'); 

// Card buttons
const callButtons = document.querySelectorAll('.call');
const copyButtons = document.querySelectorAll('.copy');
const favButtons = document.querySelectorAll('.card-header .fa-heart');

// History
const historyDiv = document.querySelector('.history');
const clearBtn = document.querySelector('.clear');

// Copy counter
let copyCount = 0;

//Heart
favButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let current = parseInt(loveText.textContent);
    loveText.textContent = current + 1;
    btn.classList.toggle('fas'); 
    btn.classList.toggle('far');
    btn.style.color = 'red';
  });
});

//Call 
callButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let currentCoin = parseInt(coinText.textContent);
    if (currentCoin >= 20) {
      coinText.textContent = currentCoin-20;
    } else {
      alert("Not enough coins!");
      return;
    }

    // information
    const card = btn.closest('.card');
    const serviceName = card.querySelector('h3').textContent;
    const serviceNumber = card.querySelector('h2').textContent;

    // Current Time
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // History add
    const div = document.createElement('div');
    div.classList.add('history-item');
    div.innerHTML = `
      <div class="left">
        <strong>${serviceName}</strong>
        <p>${serviceNumber}</p>
      </div>
      <div class="right">${currentTime}</div>
    `;

    historyDiv.appendChild(div);
  });
});

//Copy-button 
copyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const serviceNumber = card.querySelector('h2').textContent;

    // Copy alert
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`Copied: ${serviceNumber}`);
    }).catch(err => {
      console.error("Copy failed", err);
    });

    // Increase counter
    copyCount++;
    copyText.textContent = `${copyCount} Copy`;
  });
});

//Clear history
clearBtn.addEventListener('click', () => {
  const items = historyDiv.querySelectorAll('.history-item');
  items.forEach(item => item.remove());
});

