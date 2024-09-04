

const cards = ["Angel", "Rosa","Adelyn"];

function writeCards(cards) {
  const messages =[];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}
writeCards(cards);

function countDown() {
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown);
    countdown--;
  }
}