document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-button');
    const submitButton = document.getElementById('submit-button');
    const ratingContainer = document.querySelector('.rating-container');
    const thankYouContainer = document.querySelector('.thank-you-container');
    const selectedRatingText = document.getElementById('selected-rating');
    let selectedRating = null;

    // Add click event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.getAttribute('data-rating');
        });
    });

    // Add click event listener to submit button
    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            ratingContainer.style.display = 'none';
            thankYouContainer.style.display = 'block';
            selectedRatingText.textContent = selectedRating;
        } else {
            alert('Please select a rating before submitting!');
        }
    });
});
