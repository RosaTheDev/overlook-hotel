// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');




import Customer from './classes/customer';
import customerData from '../test/test-data/customer-data'
import bookingData from '../test/test-data/booking-data'
import roomData from '../test/test-data/room-data'

const welcomeMessage = document.querySelector('.welcome-user');
const bookingInfoPage = document.querySelector('.dashboard')
const dateControl = document.querySelector('input[type="date"]');
const calendarSubmitBtn = document.querySelector('input[type="submit"]')

window.addEventListener('load', welcomeUserMessage())

calendarSubmitBtn.addEventListener('click', function(event) {
  grabdate(event)
})


function welcomeUserMessage() {
  const customer = new Customer(customerData[1]);
  customer.currentBookings(bookingData)
  const totalCost = customer.calculateTotalCost(roomData)
  console.log(totalCost)
  welcomeMessage.innerHTML = `<h2>Welcome To The Overlook Hotel ${customer.name}</h2> 
  <h2>You Spent: $ ${totalCost} So Far On Rooms!</h2>`

console.log(customer.presentBookings)

  customer.presentBookings.forEach(booking => {
    bookingInfoPage.innerHTML += `<section>
    <h2>Booking Information:</h2>
    <h2>confirmation number: ${booking.id}</h2>
    <h2>Booked for: ${booking.date}<h2>
    <h2>Room Number: ${booking.roomNumber}</h2>
    </section>`
  })
}

function grabdate(event) {
  event.preventDefault();
  console.log(dateControl.value)
}



