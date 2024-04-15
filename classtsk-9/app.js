// // Task 1
// const input = document.querySelector("input");
// const value = document.querySelector("value");
// const password = document.querySelector(".password");
// const button = document.querySelector(".button");
// const errorMessage = document.querySelector(".error")

// button.addEventListener("click", () => {
//   console.log(password.value)
//   if (input.value.length > 8) {
//    errorMessage.innerText = "Password can not contain more than 8 characters.";
//    errorMessage.style.color = "red";
//   } else if (input.value.includes("")){
//    errorMessage.innerText = "Password contains space.";
//    errorMessage.style.color = "red";
//   }
//   else {
//     errorMessage.innerText = "Password entered successfully.";
//     errorMessage.style.color = "green";
//     input.value = "";
// }
// });


// Task 2
const item1 = document.querySelector(".item-1")
const item2 = document.querySelector(".item-2")
const item3 = document.querySelector(".item-3")
const parag1Message = document.querySelector(".parag-1")
const parag2Message = document.querySelector(".parag-2")
const parag3Message = document.querySelector(".parag-3")


item1.addEventListener("click", () => {
    parag1Message.style.display = "block"
    

});
item2.addEventListener("click", () => {
    parag2Message.style.display = "block"
});
item3.addEventListener("click", () => {
    parag3Message.style.display = "block"
});