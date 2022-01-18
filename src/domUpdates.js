
import { availableRooms, filterByRooms, findAvailableRooms, loadPage, filteredRoomType, customers, bookRoom } from  './scripts'

let date;
let dropDownSelection;
let customerIndex;

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
let roomNumb;


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
  
    customer.currentBookings(bookings)
    const totalCost = customer.calculateTotalCost(rooms)
    // console.log(customer.presentBookings)
    
    welcomeMessage.innerHTML = `<h2>Welcome To The Overlook Hotel ${customer.name}</h2> 
     <h2>You Spent: $ ${totalCost}  So Far On Rooms!</h2>`
    if (customer.presentBookings.length > 0) {
      return customer.presentBookings.forEach(booking => {
        bookingInfoPage.innerHTML += `
        <section class="bookings">
        <p>Booking Information:</p>
        <p>confirmation number: ${booking.id}</p>
        <p>Booked for: ${booking.date}<p>
        <p>Room Number: ${booking.roomNumber}</p>
        </section>
        `
      })
    } else {
      bookingInfoPage.innerHTML = ' '
      return bookingInfoPage.innerHTML = '<h1>We fiercely apologize. There is no Vacancy, please try again</h1>'
    }
  },

  avilableRooms() {
    console.log(availableRooms)
    displayAvailableRooms.innerHTML = ' '
    if (availableRooms.length > 0) {
      // console.log('hello')
      availableRooms.forEach(room => {
        displayAvailableRooms.innerHTML += `
        <section class="rooms">
        <p>rooms Information:</p>
        <p id="roomNumber">room number: ${room.number}</p>
        <p>roomType: ${room.roomType}</p>
        <p>bedSize: ${room.bedSize}</p>
        <p>numBeds: ${room.numBeds}</p>
        <p>costPerNight: ${room.costPerNight}</p>
        <button class="bookMe">Book Me</button>
        </section>
        `
      })
    } else {
      displayAvailableRooms.innerHTML = ''
      return displayAvailableRooms.innerHTML = '<h1>We fiercely apologize. There is no Vacancy, please try again</h1>'
    }
    bookMe = document.querySelectorAll('.bookMe')
    roomNumb = document.getElementById("roomNumber").innerHTML
    this.bookARoom(bookMe, roomNumb)
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
    if (filteredRoomType.length > 0) {
      console.log('hello')
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
    } else {
      filteredRooms.innerHTML = ''
      return filteredRooms.innerHTML = '<h1>We fiercely apologize. There is no Vacancy, please try again</h1>'
    }
    bookMe = document.querySelectorAll('.bookMe')
    this.bookARoom(bookMe)
  },

  bookARoom(bookMe, roomNumb) {
    console.log(roomNumb)
    bookMe.forEach(book => {
      book.addEventListener('click', function(event) {
        bookRoom(date, roomNumb)
      })
    })
  }

}

// event listeners

loginBtn.addEventListener('click', function(event)  {
  console.log(event)
  customerIndex = username.value.split('customer')[1]
  console.log('yooo', customerIndex)
  domUpdates.hideLoginPage();
  domUpdates.showUserDashboard();
  loadPage(customerIndex);
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
  // this.bookARoom(bookMe)
  // bookRoom(date)
})

grabDropDown.addEventListener('change', function(event) {
  dropDownSelection = event.target.value
})

dropDrownBtn.addEventListener('click', function(event) {
  domUpdates.grabdate(event)
  findAvailableRooms(date);
  filterByRooms(dropDownSelection)
})


export {date,  dropDownSelection, customerIndex};
export default domUpdates;