import Customer from './classes/customer';

// Query Selectors
const welcomeMessage = document.querySelector('.welcome-user');
const bookingInfoPage = document.querySelector('.dashboard')
const dateControl = document.querySelector('input[type="date"]');
const calendarSubmitBtn = document.querySelector('input[type="submit"]')

const domUpdates = {


  welcomeUserMessage(customers, bookings, rooms, customer) {
    this.currentBookings
    customer.currentBookings(bookings)
    const totalCost = customer.calculateTotalCost(rooms)
    console.log(totalCost)
    console.log(customer)
    console.log(customer.presentBookings)
    welcomeMessage.innerHTML = `<h2>Welcome To The Overlook Hotel ${customer.name}</h2> 
  <h2>You Spent: $ ${totalCost}  So Far On Rooms!</h2>`
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