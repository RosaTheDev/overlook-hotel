import { expect } from 'chai';
import roomData from './test-data/room-data'
import Room from '../src/classes/room'


describe('Room', () => {
  let room;
  beforeEach(() => {
    room = new Room(roomData[0])
  })
  
  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  })
})
