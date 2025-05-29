document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".ticket-card");

  cards.forEach(card => {
    const incrementBtn = card.querySelector(".increment");
    const decrementBtn = card.querySelector(".decrement");
    const countDisplay = card.querySelector(".ticket-count");
    const priceDisplay = card.querySelector(".total-price");
    const basePrice = parseInt(card.dataset.price);

    incrementBtn.addEventListener("click", () => {
      let count = parseInt(countDisplay.textContent);
      if (count < 99) count++;
      countDisplay.textContent = count.toString().padStart(2, '0');
      priceDisplay.textContent = `$${(basePrice * count).toLocaleString()}`;
    });

    decrementBtn.addEventListener("click", () => {
      let count = parseInt(countDisplay.textContent);
      if (count > 1) count--;
      countDisplay.textContent = count.toString().padStart(2, '0');
      priceDisplay.textContent = `$${(basePrice * count).toLocaleString()}`;
    });
  });
});