const fetchData = (api) => 
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

const customersData = fetchData('customers')

const roomsData = fetchData('rooms')

const bookingsData = fetchData('bookings')

const postBooking = (data) => {

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