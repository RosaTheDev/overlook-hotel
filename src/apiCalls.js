
let fetchData = (api) => 
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

let customersData = fetchData('customers')

let bookingsData = fetchData('bookings')

let roomsData = fetchData('rooms')

let postBooking = (data) => {

  return fetch(`http://localhost:3001/api/v1/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        console.log(response.json())
        throw "response"
      }
      return response.json()
    })
}

export {customersData, roomsData, bookingsData, postBooking}