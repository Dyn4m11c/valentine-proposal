const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const catMeme = document.getElementById('cat-meme');

// Function to move the 'No' button
noBtn.addEventListener('mouseover', () => {
    // Calculate a random position on the screen
    // We subtract button size so it doesn't spawn off-screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function for when they finally click 'Yes'
yesBtn.addEventListener('click', () => {
    // 1. Change the text
    question.innerHTML = "❤️وأنا بحبك"; 
    
    // 2. Hide the buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // 3. Show the surprise (choose the one that matches your HTML above)
    const surprise = document.getElementById('surprise-container'); // for video
    // const surprise = document.getElementById('cat-meme'); // for image
    
    surprise.style.display = 'block';
});

let hoverCount = 0;
noBtn.addEventListener('mouseover', () => {
    hoverCount++;
    
    if(hoverCount === 1) {
        noBtn.innerHTML = "متأكدة؟";
    } else if(hoverCount === 4) {
        noBtn.innerHTML = "Please 🥺";
    } else if(hoverCount === 6) {
        noBtn.innerHTML = "😂خلص تحيون";
    }
    
    // ... rest of the movement code ...
});

