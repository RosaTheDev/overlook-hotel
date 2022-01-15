import Customer from './classes/customer';
import customerData from '../test/test-data/customer-data'
const welcomeMessage = document.querySelector('.welcome-user');

window.addEventListener('load', welcomeUserMessage())

function welcomeUserMessage() {
  const customer = new Customer(customerData[0]);
  welcomeMessage.innerText = `Welcome To The Overlook Hotel ${customer.name} You Spent: ${customer.calculateTotalCost} So Far On Rooms!`
}

export {domUpdates, welcomeUserMessage};