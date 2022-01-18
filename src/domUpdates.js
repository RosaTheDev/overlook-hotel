
import { availableRooms, filterByRooms, findAvailableRooms, loadPage, filteredRoomType, customers } from  './scripts'

let date;
let dropDownSelection;
let customerindex;

// Query Selectors
const loginPage = document.querySelector('.login');
const loginBtn = document.querySelector('.login-page-btn');
const userDashboard = document.querySelector('.main-dashboard');
const bookingInfoPage = document.querySelector('.dashboard');
const BookRoomBtn = document.querySelector('#book-now-btn')
const calendarSubmitBtn = document.querySelector('#calendarCheckInBtn');
const grabCalendar = document.querySelector('#calendar-start');
const roomBooking = document.querySelector('.booking-a-room');
const welcomeMessage = document.querySelector('.welcome-user');
const displayAvailableRooms = document.querySelector('.checkin-board');
const grabDropDown = document.querySelector('#room-types');
const dropDrownBtn = document.querySelector('#dropDownBtn');
const filteredRooms = document.querySelector('.filteredRooms');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
let bookMe;



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

  hideCheckInBoard() {
    displayAvailableRooms.classList.add('hidden')
  },
  showFilteredRooms() {
    filteredRooms.classList.remove('hidden')
  },
  // on page load log in 

  // 

  // works
  welcomeUserMessage(customer, bookings, rooms) {
    console.log(customerindex)
    console.log(customers[customerindex])
    customer.currentBookings(bookings)
    const totalCost = customer.calculateTotalCost(rooms)
    welcomeMessage.innerHTML = `<h2>Welcome To The Overlook Hotel ${customer.name}</h2> 
  <h2>You Spent: $ ${totalCost}  So Far On Rooms!</h2>`

    customer.presentBookings.forEach(booking => {
      bookingInfoPage.innerHTML += `
    <section class="bookings">
    <p>Booking Information:</p>
    <p>confirmation number: ${booking.id}</p>
    <p>Booked for: ${booking.date}<p>
    <p>Room Number: ${booking.roomNumber}</p>
    </section>
    `
    })
  },

  avilableRooms() {
    console.log(availableRooms)
    displayAvailableRooms.innerHTML = ' '
    availableRooms.forEach(room => {
      displayAvailableRooms.innerHTML += `
        <section class="rooms">
          <p>rooms Information:</p>
          <p>room number: ${room.number}</p>
          <p>roomType: ${room.roomType}</p>
          <p>bedSize: ${room.bedSize}</p>
          <p>numBeds: ${room.numBeds}</p>
          <p>costPerNight: ${room.costPerNight}</p>
          <button class="bookMe">Book Me</button>
          </section>
           `
    })
    bookMe = document.querySelectorAll('.bookMe')
    this.bookARoom(bookMe)
  },


  // filter by date && room type page

  grabdate(event) {
    event.preventDefault();
    date = grabCalendar.value
  },

  dropDownSelection() {
    this.hideCheckInBoard()
    this.showFilteredRooms()

    console.log('domupdates', filteredRoomType)
    filteredRooms.innerHTML = ' '
    filteredRoomType.forEach(room => {
      filteredRooms.innerHTML += `
        <section class="filteredRoomsdiv">
          <p>rooms Information:</p>
          <p>room number: ${room.number}</p>
          <p>roomType: ${room.roomType}<p>
          <p>bedSize: ${room.bedSize}</p>
          <p>numBeds: ${room.numBeds}</p>
          <p>costPerNight: ${room.costPerNight}</p>
          <button class="bookMe">Book Me</button>
        </section>
        `
    })
    bookMe = document.querySelectorAll('.bookMe')
    this.bookARoom(bookMe)
  },

  bookARoom(bookMe) {
    bookMe.forEach(book => {
      book.addEventListener('click', function(event) {
        console.log(event.target.parentNode)
      })
    })
  }

}

// event listeners
window.addEventListener('load', function () {
  loadPage(customerindex);
})

loginBtn.addEventListener('click', function(event)  {
  console.log(event)
  customerindex = username.value.split('customer')[1]
  console.log('yooo', customerindex)
  // console.log(password.value)
  domUpdates.hideLoginPage();
  domUpdates.showUserDashboard();

})

BookRoomBtn.addEventListener('click', function(event) {
  console.log(event)
  domUpdates.hideUserDashboard();
  domUpdates.showBookingPage()
  findAvailableRooms();
})


calendarSubmitBtn.addEventListener('click', function (event) {
  domUpdates.grabdate(event)
  findAvailableRooms(date);
})

grabDropDown.addEventListener('change', function(event) {
  dropDownSelection = event.target.value
})

dropDrownBtn.addEventListener('click', function(event) {
  domUpdates.grabdate(event)
  findAvailableRooms(date);
  filterByRooms(dropDownSelection)
})


export {date,  dropDownSelection};
export default domUpdates;