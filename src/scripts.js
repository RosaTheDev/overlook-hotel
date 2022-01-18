/* eslint-disable max-len */
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');



//imports
import { fetchData, postBooking } from './apiCalls';
import domUpdates  from './domUpdates';
import { customerIndex } from './domUpdates';
import Customer from './classes/customer';
import Booking from './classes/booking'
import Room from './classes/room';

// global variables
let customers;
let customer
let bookings;
let rooms;
let availableRooms;
let filteredRoomType

// on page load
const loadPage = (customerIndex) => {
  Promise.all([fetchData(`customers/${customerIndex}`), fetchData('bookings'), fetchData('rooms')])
    .then(data => {
    // customers
      customer  = data.map(customer => {
        return new Customer(customer)
      }).find(customer => customer.id === Number(customerIndex))
      console.log('working', customer)
      console.log(data)
      
      //bookings 
      bookings = data[1].bookings.map(booking => {
        return new Booking(booking);
      })
      
      //rooms 
      rooms = data[2].rooms.map(room => {
        return new Room(room);
      })
      
      //change this to grab the user id and password
      domUpdates.welcomeUserMessage(customer, bookings, rooms)
    })
}
  
const findAvailableRooms = (date) => {
  let slashDate = date.split('-').join('/');
  console.log(slashDate)
  customer.bookingByDate(slashDate, bookings)
  customer.findAvailableRooms(rooms)
  availableRooms = customer.availableRooms.map(room => {
    return new Room(room)
  });
  domUpdates.avilableRooms();
}

const filterByRooms = (dropDownSelection) => {
  console.log(dropDownSelection)
  customer.filterByRoomType(dropDownSelection)
  console.log(customer)
  customer.filterByRoomType(dropDownSelection)
  // console.log('filtered', customer.filteredRoomTypes)
  filteredRoomType = customer.filteredRoomTypes
  console.log('f', filteredRoomType)
  domUpdates.dropDownSelection(filteredRoomType)
}

const bookRoom = (currentDate, roomNumb) => {
  let slashDate = currentDate.split('-').join('/');
  console.log(availableRooms)
  console.log(roomNumb.split(' ')[2])
  let roomNum = roomNumb.split(' ')[2]

  let currentRoom = {
    userID: customer.id,
    date: slashDate,
    roomNumber: Number(roomNum)
  }
  // console.log(currentRoom)
  postBooking(currentRoom)
}

// console.log(date)
export { customer, customers, bookings, rooms, availableRooms, filteredRoomType, loadPage, findAvailableRooms, filterByRooms, bookRoom}