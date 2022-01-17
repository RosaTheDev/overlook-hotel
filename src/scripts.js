// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');




import domUpdates from './domUpdates';
import Customer from './classes/customer';
import Booking from './classes/booking'
import Room from './classes/room';

import { calendarSubmitBtn } from './domUpdates';
import { bookingsData, customersData, roomsData } from './apiCalls';

let customers;
let customer
let bookings;
let rooms;


const loadPage = () => {
  Promise.all([customersData, bookingsData, roomsData])
    .then(data => {
      // customers
      customers  = data[0].customers.map(customer => {
        return new Customer(customer)
      })
      //random customerss
      customer = new Customer(customers[Math.floor(Math.random() * customers.length)])
      // console.log(customer)

      //bookings 
      bookings = data[1].bookings.map(booking => {
        return new Booking(booking)
      })
      // console.log(bookings)

      //rooms 
      rooms = data[2].rooms.map(room => {
        return new Room(room)
      })
      // console.log(rooms)
      domUpdates.welcomeUserMessage(customers, bookings, rooms, customer)
    })
}









window.addEventListener('load', function() {
  loadPage()
})

calendarSubmitBtn.addEventListener('click', function(event) {
  domUpdates.grabdate(event)
})


export { customer, bookings, rooms}