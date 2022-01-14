class Customer {
  constructor(customer, bookings) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookedID = bookings.id;
    this.bookedDate = bookings.date
    this.userId = bookings.userID;
    this.hasMatchingId = false;
  }
  
  matchingID() {
    if (this.id === this.userId) {
      return this.hasMatchingId = true;
    }
    return this.hasMatchingId;
  }
}
export default Customer;