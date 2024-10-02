const love = document.getElementById("love");
const lovedItems = love.getElementsByTagName("li");

for (let i = 0; i < lovedItems.length; i++) {
  const loved = lovedItems[i];
  loved.textContent = loved.textContent + " 💖";
}

const class_test = document.getElementsByClassName("drink");
const id_test = document.getElementById("drink");
const tag_test = document.getElementsByTagName("li"); //list

class_test[0].style.color = "red";
id_test.style.color = "blue";

for (let i = 0; i < tag_test.length; i++) {
  const drink = tag_test[i];
  drink.style.fontFamily = "courier";
}

const sparkleButton = document.getElementById("sparkle");
sparkleButton.addEventListener("click", function () {
  for (let i = 0; i < tag_test.length; i++) {
    const drink = tag_test[i];
    drink.textContent = drink.textContent + "✨";
  }
});
