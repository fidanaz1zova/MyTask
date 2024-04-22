const username = document.querySelector(".username")
const password = document.querySelector(".password")
const subbtn = document.querySelector(".subbtn")
  
  subbtn.addEventListener ("click", function () {
    console.log("fidan")
    const obj = {
        username: username.value,
        password: password.value,
      }
  
   fetch(`https://northwind.vercel.app/api/suppliers/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj),
    })
    .then(() => {
      location.reload();
      window.location.href = "./index.html";
    })

  });