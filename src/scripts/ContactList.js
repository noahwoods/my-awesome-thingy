import contactData from "./ContactCollection"
// import grabData from "./Contact"

// $("infoButton_[i]").click(() => {
  // $("dropInfo").slideToggle()
  // $(this).toggleClass("isRed")

  // counter = 0

  contactData.getContactData().then((response) => {

    for (let i = 0; i < response.length; i++) {

      let object = response[i]

      $("#container").append(`<h2>${object.firstName} ${object.lastName}</h2>
        <button id"infoButton_${[i]}>Contact Info.</button>`)
      // counter++



      //   console.log(objects)

      //   for (const keys in objects) {
      //     const element = objects[keys]

      //   }
    }
    return
  })
// })




















export default "./main.js"
