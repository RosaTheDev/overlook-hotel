class Booking {
  constructor(booking, rooms) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
    this.roomServiceCharges = booking.roomServiceCharges;
    this.rooms = rooms
  }

  matchedRooms() {
    if (this.roomNumber === this.rooms.number) {
      return this.rooms
    }
  }
}

export default Booking;