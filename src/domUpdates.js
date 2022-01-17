import Customer from './classes/customer';
import customerData from '../test/test-data/customer-data'
import bookingData from '../test/test-data/booking-data'
import roomData from '../test/test-data/room-data'

// Query Selectors
const welcomeMessage = document.querySelector('.welcome-user');
const bookingInfoPage = document.querySelector('.dashboard')
const dateControl = document.querySelector('input[type="date"]');
const calendarSubmitBtn = document.querySelector('input[type="submit"]')

const domUpdates = {
  welcomeUserMessage() {
  
    const customer = new Customer(customerData[0]);
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

 
  },

  grabdate(event) {
    event.preventDefault();
    console.log(dateControl.value)
  }
}
export { welcomeMessage, bookingInfoPage, dateControl, calendarSubmitBtn };
export default domUpdates;