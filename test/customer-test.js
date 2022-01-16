import { expect } from 'chai';
import customerData from './test-data/customer-data';
import bookingData from './test-data/booking-data'
import roomData from './test-data/room-data'
import Customer from '../src/classes/customer';
import bookings from './test-data/booking-data';


describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(customerData[0])
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

  it('Should contain all bookings', () => {
    customer.currentBookings(bookingData);
    expect(customer.presentBookings.length).to.equal(2);
  });

  it('Should return an apology if there is no booking', () => {
    customer = new Customer(customerData[7]);
    expect(customer.currentBookings(bookingData)).to.equal(customer.apology);
  });

  it('Should return a total cost for the rooms', () => {
    customer.currentBookings(bookingData);
    expect(customer.calculateTotalCost(roomData)).to.equal(856.04);
  })

  it('Should check the closed rooms', () => {
    customer = new Customer(customerData)
    let closed = customer.checkClosedRooms(bookingData);
    expect(closed).to.equal(customer.closedBookings);
  });

  it('Should check the open rooms', () => {
    customer = new Customer(customerData)
    let open = customer.checkOpenRooms(bookingData);
    expect(open).to.equal(customer.openRooms);
  });

  it('Should check the open rooms by the date', () => {
    customer = new Customer(customerData)
    customer.checkClosedRooms(bookingData)
    customer.checkOpenRooms(bookingData)
    let open = customer.checkOpenRoomsDates('2022/01/15');
    expect(open).to.equal(customer.openBooking);
  });
  
});