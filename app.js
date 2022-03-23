const buttons = document.querySelectorAll('button.btn');
const submitBtn = document.querySelector('.btn-full');
const thankYouCard = document.querySelector('.thank-you-card');
const error = document.querySelector('.error');
const ratingCard = document.querySelector('.rating-card');

// button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');
  });
});

const updateThanksCard = rateValue => {
  const html = `
    <div class="illustration">
      <img src="./images/illustration-thank-you.svg" role="presentation" />
    </div>
    <div class="rating">
      <p>You selected ${rateValue} out of 5</p>
    </div>
    <div class="header">
      <h2>Thank you!</h2>
    </div>
    <div class="card-text" style="font-size: 0.86rem;">
      <p>
        We appreciate you taking the time to give a rating. If you ever
        need more support, don't hesitate to get in touch!
      </p>
    </div>
  `;
  thankYouCard.innerHTML = html;
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
};

// submit button
submitBtn.addEventListener('click', () => {
  buttons.forEach(button => {
    if (button.classList.contains('active')) {
      let rated = button.textContent.trim();
      updateThanksCard(rated);
    } else {
      error.classList.remove('hidden');
    }
  });
});
