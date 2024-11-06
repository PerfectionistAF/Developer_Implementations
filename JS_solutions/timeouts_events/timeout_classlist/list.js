const list = document.getElementById("fruits");
const items = list.getElementsByTagName("li");

// Find the index of the last item
let index = items.length - 1;

function showNextItem() {
  if (index >= 0) {
    items[index].style.visibility = "visible";
    index--; //count down
    //delay in miliseconds (one second)
    setTimeout(showNextItem, 1000);
  }
}

showNextItem();

const button = document.getElementById("button");
button.addEventListener("click", function () {
  let new_list = document.getElementById("title").classList;
  setTimeout(new_list.add("mango"), 1000);
  console.log(new_list);
  setTimeout(new_list.add("title"), 5000);
  console.log(new_list);
  //setTimeout(new_list.remove("title"), 10000);
});
