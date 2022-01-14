import { expect } from 'chai';
import customerData from './test-data/customer-data';
import bookingData from './test-data/booking-data'
import roomData from './test-data/room-data'
import Customer from '../src/classes/customer';


describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(customerData[0], bookingData[0])
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should have an Id', () => {
    expect(customer.id).to.equal(customerData[0].id);
  });

  it('should have a name', () => {
    expect(customer.name).to.equal(customerData[0].name);
  });

  it('Should match the booking userId with the customerId', () => {
    customer.matchingBooking()
    expect(customer.hasMatchingId).to.equal(true)
  });

  it('Should return false if bookingId and customerId dont match', () => {
    customer = new Customer(customerData[1], bookingData[0]);
    customer.matchingBooking();
    expect(customer.hasMatchingId).to.equal(false);
  });

  it('Should return the booking that the customer made', () => {
    expect(customer.matchingBooking()).to.equal(bookingData[0]);
  });

  it('Should return an apology if the bookings do not match', () => {
    customer = new Customer(customerData[0], bookingData[1]);
    expect(customer.matchingBooking()).to.equal(customer.apology)
  })
});