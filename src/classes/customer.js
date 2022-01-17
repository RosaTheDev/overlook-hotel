class Customer {
  constructor(customer) {
    this.customers = customer;
    this.id = customer.id;
    this.name = customer.name;
    this.presentBookings = [];
    this.closedBookings = [];
    this.openRooms = [];
    this.openBooking = [];
    this.apology = `I'm so sorry ${this.name}, please adjust your dates`;
  }

  currentBookings(bookings) {
    bookings.filter(booking => {
      if (booking.userID === this.id) {
        return this.presentBookings.push(booking);
      }
    })

    if (this.presentBookings.length === 0) {
      return this.apology
    }
  }

  checkClosedRooms(bookings) {
    return bookings.reduce((acc, booking) => {
      this.customers.forEach(customer => {
        if (customer.id === booking.userID && !acc.includes(booking)) {
          acc.push(booking)
        }
      })
      this.closedBookings = acc
      return acc 
    }, [])

  }

  checkOpenRooms(bookings) {
    return bookings.reduce((acc, booking) => {
      this.closedBookings.forEach(closedRoom => {
        if (closedRoom.id !== booking.id && !acc.includes(booking)) {
          acc.push(booking)
        }
      })
      this.openRooms = acc
      return acc
    }, [])
  }

  checkOpenRoomsDates(date) {
    this.openRooms.filter(openRoom => {
      if (openRoom.date === date) {
        this.openBooking.push(openRoom)
      }
    })
    return this.openBooking

  }


  calculateTotalCost(rooms) {
    let totalCostArray = this.presentBookings.map(booking => {
      let foundRooom = rooms.filter(room => {
        if (room.number === booking.roomNumber) {
          return room;
        }
      })
      return foundRooom
    })
    
    let totalCost = totalCostArray.reduce((acc, room) => {
      acc += room[0].costPerNight;
      return acc
    }, 0)

    return Math.round(totalCost * 100) / 100
  }
}
export default Customer;