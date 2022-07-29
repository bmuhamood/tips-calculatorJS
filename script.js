const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  let billTotal = Number(billInput.value);
  let tipPercent = Number(tipInput.value);
  let tipAmount = billTotal * (tipPercent / 100);
  let totalPerPerson = (billTotal + tipAmount) / numberOfPeople;
  perPersonTotal.innerText = `$${totalPerPerson.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
}

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}