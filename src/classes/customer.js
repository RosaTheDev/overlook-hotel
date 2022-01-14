class Customer {
  constructor(customer, bookings) {
    this.id = customer.id;
    this.name = customer.name;
    this.userId = bookings.userID;
    this.hasMatchingId = false;
    this.bookings = bookings
    this.apology = `I'm so sorry ${this.name}, please adjust your dates`
  }
  
  matchingBooking() {
    if (this.id === this.userId) {
      this.hasMatchingId = true;
      return this.bookings;
    }
    //show whats left over
    this.hasMatchingId;
    return this.apology;
  }

 
}
export default Customer;