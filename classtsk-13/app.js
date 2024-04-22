const username = document.querySelector(".username")
const password = document.querySelector(".username")
const logbtn = document.querySelector(".logbtn")
const regbtn = document.querySelector(".regbtn")



logbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    // console.log("fidan")
    const tbody = document.querySelector ("tbody")
  fetch("https://northwind.vercel.app/api/suppliers")
  .then(res => res.json ())
  .then (data => {
    // console.log(data)
    const contactName = data.find (
        (element) => element.contactName == username.value
    );
        // console.log(element.contactName)
        // console.log(element.address.postalCode)

        if (contactName) {
            console.log("welcome!")

            window.location.href = "./login.html";
        } else {
            console.log("invalid information!!!")
        }
    });
  })

  regbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("welcome!")
    window.location.href = "./register.html";
  })

 
  
