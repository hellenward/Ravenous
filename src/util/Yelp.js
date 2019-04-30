const apiKey = "8xGEjdieDBXtfNrTR6l43-N29ROlwSHyTaVzyZbpoA3PPaT62fHWDntSsqJitCeZTnb5xcETn4upWrszThHxkfj1SdRrc1MaxkyO5BLxZEwzDmyNe00ZJmHUnd_HXHYx"

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    { headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });
  }
}
