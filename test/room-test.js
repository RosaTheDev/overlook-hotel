import { expect } from 'chai';
import roomData from './test-data/room-data'
import Room from '../src/classes/room'

describe('Room', () => {
  let room;

  beforeEach(() => {
    room = new Room(roomData[0])
  });

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('Should have a number for the room', () => {
    expect(room.number).to.equal(roomData[0].number);
  });

  it('Should have a room type', () => {
    expect(room.roomType).to.equal(roomData[0].roomType);
  });

  it('should check to see if the room has a bidet', () => {
    expect(room.hasBidet).to.equal(roomData[0].bidet);
  });

  it('Should check the size of the bed', () => {
    expect(room.bedSize).to.equal(roomData[0].bedSize);
  });

  it('Should check to see how many beds are in the room', () => {
    expect(room.numBeds).to.equal(roomData[0].numBeds);
  });

  it('Should check the cost per night', () => {
    expect(room.costPerNight).to.equal(roomData[0].costPerNight);
  });

});
