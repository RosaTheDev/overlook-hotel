import Customer from './classes/customer';

// Query Selectors
const loginPage = document.querySelector('.login');
const loginBtn = document.querySelector('.login-page-btn');
const userDashboard = document.querySelector('.main-dashboard');
const bookingInfoPage = document.querySelector('.dashboard');
const BookRoomBtn = document.querySelector('.book-now-btn')
const roomBooking = document.querySelector('.booking-a-room');
const welcomeMessage = document.querySelector('.welcome-user');
const bookNow = document.querySelector('#book-now-btn');
const dateControl = document.querySelector('input[type="date"]');
const calendarSubmitBtn = document.querySelector('input[type="submit"]');

const domUpdates = {
  hideLoginPage() {
    loginPage.classList.add('hidden');
  },
  showUserDashboard() {
    userDashboard.classList.remove('hidden')
    bookingInfoPage.classList.remove('hidden')
  },
  hideUserDashboard() {
    userDashboard.classList.add('hidden');
    bookingInfoPage.classList.add('hidden');
  },
  showBookingPage() {
    roomBooking.classList.remove('hidden');
  },

  welcomeUserMessage(customer, bookings, rooms) {
    customer.currentBookings(bookings)
    const totalCost = customer.calculateTotalCost(rooms)
    console.log(totalCost)
    console.log(customer)
    console.log(customer.presentBookings)
    welcomeMessage.innerHTML = `<h2>Welcome To The Overlook Hotel ${customer.name}</h2> 
  <h2>You Spent: $ ${totalCost}  So Far On Rooms!</h2>`

    customer.presentBookings.forEach(booking => {
      bookingInfoPage.innerHTML += `
    <section class="bookings-table">
    <tr>
    <td>Booking Information:</td>
    <td>confirmation number: ${booking.id}</td>
    <td>Booked for: ${booking.date}<td>
    <td>Room Number: ${booking.roomNumber}</td>
    </tr>
    </section>
    `
    })
  },

  grabdate(event) {
    event.preventDefault();
    console.log(dateControl.value)
  }
}
export { welcomeMessage, bookingInfoPage, dateControl, calendarSubmitBtn, bookNow, loginBtn,  BookRoomBtn};
export default domUpdates;