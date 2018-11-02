let contactData =
{
  getContactData: () => {
    return fetch("http://localhost:8088/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(function (response) {
      return response.json();
    })
    // .then(function (json) {
      // return (JSON.stringify(json))
    // })
  },
  postContactData: () => {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(data)
    })
  }
}







export default contactData