const words = document.querySelectorAll('.word');

words.forEach((word) => {
    word.addEventListener('click', () => {
        word.classList.add('active');

        // Remove the class after animation ends, so the effect can be reapplied
        setTimeout(() => {
            word.classList.remove('active');
        }, 600); // Matches the animation duration (0.6s)
    });
});
