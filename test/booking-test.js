import { expect } from 'chai';
import bookingData from './test-data/booking-data'
import Booking from '../src/classes/booking'


describe('Booking', () => {
    let booking;
    beforeEach(() => {
        booking = new Booking(bookingData[0])
    })

    it('Should be a function', () => {
        expect(Booking).to.be.a('function');
    })
})