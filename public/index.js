console.log("sanity check");

const burgerInput = document.querySelector("#burger_Input");
const burgerSubmit = document.querySelector("#submitButton");

burgerSubmit.addEventListener("click", (e) => {
  console.log("submitted new burger");
  if (burgerSubmit) {
    e.preventDefault();

    // Grabs the value of the textarea
    const newBurger = {
      burger_name: burgerInput.value.trim(),
    };

    // Send POST request to create a new quote
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
      // make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById("burger_Input").value = "";
      // Reload the page so the user can see the new quote
      console.log("NEW BURGER ADDED.");
      //   location.reload();
    });
  }
});
