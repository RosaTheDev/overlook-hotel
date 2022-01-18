import { expect } from 'chai';
import customerData from './test-data/customer-data';
import bookingData from './test-data/booking-data'
import roomData from './test-data/room-data'
import Customer from '../src/classes/customer';
import bookings from './test-data/booking-data';
import rooms from './test-data/room-data';


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
  });

  it('Should return a list of unavilable rooms for the booking date', () => {
    customer.bookingByDate('2022/01/15', bookingData)
    expect(customer.unavailableRooms[0]).to.equal(bookingData[9]);
  });

  it('Should return available Rooms', () => {
    customer.bookingByDate('2022/01/15', bookingData);
    customer.findAvailableRooms(roomData);
    expect(customer.availableRooms[0]).to.equal(roomData[0]);
  });

  it('Should filter by roomType', () => {
    customer.bookingByDate('2022/01/15', bookingData);
    customer.findAvailableRooms(roomData);
    customer.filterByRoomType('residential suite');
    expect(customer.filteredRoomTypes[0]).to.equal(roomData[0]);
  });
});