const burgerInput = document.querySelector("#burger_input");
const burgerSubmit = document.querySelector("#submitButton");
const burgerUpdate = document.querySelector(".devouredID")

burgerSubmit.addEventListener("click", (e) => {
  console.log("submitted new burger");
  if (burgerSubmit) {
    e.preventDefault();

    // Grabs the value of the textarea
    const newBurger = {
      burger_name: burgerInput.value.trim(),
    };

    console.log("New Burger", newBurger)
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
      burgerInput.value = "";
      // Reload the page so the user can see the new quote
      console.log("NEW BURGER ADDED.");
      location.reload();
    });
  }
});

burgerUpdate.addEventListener("click", (e) => {
  console.log("updating burger", burgerUpdate);
  if (burgerUpdate) {
    e.preventDefault();
  }
  var burgerID = burgerUpdate.value;
  console.log ("burger ID" + burgerID);

  const updateBurger = {
    devoured: 1,
  };

  fetch("/api/burgers/"+burgerID, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // make sure to serialize the JSON body
    body: JSON.stringify(updateBurger),
  }).then(() => {
    // Reload the page so the user can see the new quote
    console.log("updated burger successfully!");
      location.reload();
  });

});


