import { expect } from 'chai';
import customerData from './test-data/customer-data';
import Customer from '../src/classes/customer';


describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(customerData[0])
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should have an Id', () => {
    expect(customer.id).to.equal(customerData[0].id)
  });
});