function animateSquares() {
    Promise.all([
        
        anime({
            targets: '.square1',
            keyframes: [
                {translateX: 0, duration: 200},
                {translateX: 120, duration: 300},
                {translateX: 100, duration: 100}
            ],
            easing: 'linear'
        }).finished,

        anime({
            targets: '.square2',
            keyframes: [
                {translateX: 0, duration: 200},
                {translateX: -120, duration: 300},
                {translateX: -100, duration: 100}
            ],
            easing: 'linear'
        }).finished
    ]).then(function() {
        console.log('animation done');
        updateMessage('Animation is complete! Click anywhere to restart.');
    })
}

function resetSquarePositions() {
    const square1 = document.querySelector('.square1');
    const square2 = document.querySelector('.square2');

    if (square1 && square2) {
        square1.style.transform = 'translateX(0)';
        square2.style.transform = 'translateX(0)';
    }
}

function updateMessage(newMessage) {
    const messageWrapper = document.querySelector('.message-wrapper');
    if (messageWrapper) {
        messageWrapper.textContent = newMessage;
    }
}

// Function to handle click event on the document
function handleClick(event) {
    resetSquarePositions();
    animateSquares();
    updateMessage('');
}

// Add click event listener to the document
document.addEventListener('click', handleClick);