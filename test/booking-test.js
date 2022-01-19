import { expect } from 'chai';
import bookingData from './test-data/booking-data'
import Booking from '../src/classes/booking'

describe('Booking', () => {
  let booking;
  beforeEach(() => {
    booking = new Booking(bookingData[0]);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should be able to hold an id', () => {
    expect(booking.id).to.equal(bookingData[0].id);
  });
    
  it('Should be able to hold a userID', () => {
    expect(booking.userID).to.equal(bookingData[0].userID);
  });

  it('Should be able to hold onto a date', () => {
    expect(booking.date).to.equal(bookingData[0].date);
  });

  it('Should be able to hold a room number', () => {
    expect(booking.roomNumber).to.equal(bookingData[0].roomNumber);
  });

  it('Should be able to hold onto room service charges', () => {
    // eslint-disable-next-line max-len
    expect(booking.roomServiceCharges).to.equal(bookingData[0].roomServiceCharges);
  });
})