function highlightElements() {
    // Using getElementById to select a single element
    const title = document.getElementById("main-title");
    title.classList.add("highlight-yellow");
  
    // Using querySelectorAll to select all elements with the class 'description'
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach((element) => {
      element.classList.add("highlight-blue");
    });
  }
  