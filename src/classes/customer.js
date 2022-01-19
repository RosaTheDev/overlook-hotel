class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.presentBookings = [];
    this.unavailableRooms = [];
    this.availableRooms = [];
    this.filteredRoomTypes = [];
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

  bookingByDate(date, bookings) {
    bookings.filter(booking => {
      if (booking.date === date) {
        return this.unavailableRooms.push(booking);
      }
    })
  }

  findAvailableRooms(rooms) {
    let unavailableRooms = this.unavailableRooms.map(unavailableRoom => unavailableRoom.roomNumber);
    let available = rooms.reduce((acc, room) => {
      if (room.number !== unavailableRooms.roomNumber) {
        acc.push(room)
      }
      return acc
    }, [])
    this.availableRooms = available
  }

  filterByRoomType(roomPrefrance) {
    this.availableRooms.filter(room => {
      if (room.roomType === roomPrefrance) {
        this.filteredRoomTypes.push(room)
      }
    })
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