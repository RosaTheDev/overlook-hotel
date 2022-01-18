
let fetchData = (api) => {
  return fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())
}
// (`http://localhost:3001/api/v1/customers${customerIndex}`
let postBooking = (data) => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
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

export {fetchData, postBooking}