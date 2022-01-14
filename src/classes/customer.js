class Customer {
  constructor(customer, bookings) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookedID = bookings.id;
    this.userId = bookings.userID;
    this.hasMatchingId;
  }
  
  matchingID() {
    if (this.id === this.userId) {
      this.hasMatchingId = true
    }
  }
}
export default Customer;