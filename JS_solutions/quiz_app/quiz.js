//cat type scores:
const catScores = {
    Energetic: 0,
    Curious: 0,
    Cosy: 0,
    Sleepy: 0,
}

// Attaching event listeners to all buttons:
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const catType = this.getAttribute('data-cat');
        catScores[catType]++;  // Increment the score for the selected cat type
        displayResult();
      
        // Disable buttons for this question to prevent multiple selections
        const parentDiv = this.closest('.button');
        parentDiv.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
    });
});

// Submit button logic
document.getElementById('submit-button').addEventListener('click', function () {
    displayResult();
});

// Function to find and display the most likely cat type
function displayResult() {
    // Find the cat type with the highest score
    let highestCatType = null;
    let highestScore = -1;

    for (const [catType, score] of Object.entries(catScores)) {
        if (score > highestScore) {
            highestCatType = catType;
            highestScore = score;
        }
    }

    // Display the result in the HTML
    document.getElementById('cat-type').textContent = highestCatType ? capitalizeFirstLetter(highestCatType) : 'None';
}

// Helper function to capitalize the first letter of the cat type
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Disappearing and appearing kitties (still in the works):
window.addEventListener('scroll', () => {
    const question2 = document.querySelector('.question2');
    const question3 = document.querySelector('.question3');
    const svg1 = document.getElementById('svg1');
    const svg2 = document.getElementById('svg2');
    const svg3 = document.getElementById('svg3');

    // Get the position of question2
    const question2Position = question2.getBoundingClientRect().top;
    const question3Position = question3.getBoundingClientRect().top;
  
    // When the user scrolls past question 1, fade out svg1 and fade in svg2
    if (question2Position < window.innerHeight / 2 && question3Position > window.innerHeight / 2) {
        svg1.classList.add('fade-out');
        svg1.classList.remove('fade-in');
        svg2.classList.add('fade-in');
        svg2.classList.remove('fade-out');
        svg3.classList.add('fade-out');
        svg3.classList.remove('fade-in');
    }
    
    else if (question3Position < window.innerHeight / 2) {
        svg2.classList.add('fade-out');
        svg2.classList.remove('fade-in');
        svg3.classList.add('fade-in');
        svg3.classList.remove('fade-out');
    }
  
    else {
        svg1.classList.add('fade-in');
        svg1.classList.remove('fade-out');
        svg2.classList.add('fade-out');
        svg2.classList.remove('fade-in');
        svg3.classList.add('fade-out');
        svg3.classList.remove('fade-in');
    }
});

//Explanation of above code:

// window.innerHeight / 2:
// This refers to half of the current height of the visible browser window (the viewport). By dividing the viewport height by 2, you're determining a point that is halfway down the visible screen.
// It helps you track when an element (like question2 or question3) is in the middle of the screen or has passed that point.

// question2Position:
// question2.getBoundingClientRect().top gives the position of the top of the question2 element relative to the top of the visible window (viewport). 
// So, question2Position < window.innerHeight / 2 checks whether the top of question2 has moved past halfway down the screen. This indicates that the user has scrolled past the top half of question2.

    document.getElementById('cat-type').textContent = highestCatType ? capitalizeFirstLetter(highestCatType) : 'None';

const energetic = {
  name:"Energetic",
  highlight:"Extraversion", //As a cat, you are active, inventive and smart, likely reflecting some of these qualities of the human you! You attract other kitty friends with your resourcefulnes and new ideas - sometimes you yourself might not realise how intriguing your ideas can be to others. You have to watch out for selling yourself short.
  accident_prone:"Yes",
  affinity:"Curious",
};

const curious = {
  name:"Curious",
  highlight:"Adventurous", //As a cat, you are creative, charismatic and exciting! Other kitties flock to you, as your adventurous side brings them courage to try new things. You are also more likely to pioneer new ideas and inventions than others, so make the most of this with confidence! You are also more likely to get employed 😆 You have to watch out for selling your ideas short, though.
  accident_prone:"Ees",
  affinity:"Energetic",
};

const cosy = {
  name:"Cosy",
  highlight:"Agreeable", //As a cat, you are affectionate, gentle, and playful! Other kitties flock to you for your understanding and making them feel validated. Spending time with your closest kitties under a warm blanket, cosied up in front of a movie or game, is how you define quality time, although you like to change it up once in a while. You know how to care for yourself and others, and you must be wary to capitalise on this quality!
  accident_prone:"No",
  affinity:"sleepy",
};

const sleepy = {
  name:"Sleepy",
  highlight:"Ready",//As a cat, you are always ready for any challenge. These challenges are why you might feel sleepy so much. Other kitties flock to you for your relatability and calm nature! The amount of time you feel sleepy or feel like you need more sleep attests to how much of a hard worker you are. You might not realise how exhausting the simplest of chores can be, so you should be wary of giving yourself credit where it's due and a proper rest as reward. 
  accident_prone:"Yes",
  affinity:"Cosy",
};


// <script src="quiz.js"></script>