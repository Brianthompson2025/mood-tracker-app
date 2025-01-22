document.addEventListener("DOMContentLoaded", () => {
    // Select all mood buttons
    const moodButtons = document.querySelectorAll(".mood-button");

    // Add event listeners to mood buttons
    moodButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Get the selected mood from the data attribute
            const selectedMood = button.getAttribute("data-mood");

            if (selectedMood) {
                // Save the selected mood to localStorage
                saveMood(selectedMood);

                // Provide user feedback
                alert(`You selected: ${selectedMood}`);

                // Redirect to the data page or another page
                window.location.href = "data.html";
            } else {
                alert("An error occurred. Please try again.");
            }
        });
    });
});

// Function to save mood to localStorage
function saveMood(mood) {
    // Get the existing moods from localStorage or initialize an empty array
    const moods = JSON.parse(localStorage.getItem("moods")) || [];

    // Add the new mood with a timestamp
    moods.push({ mood, timestamp: new Date().toISOString() });

    // Save the updated moods back to localStorage
    localStorage.setItem("moods", JSON.stringify(moods));

    // Also save the current mood for quick access
    localStorage.setItem("currentMood", mood);
}
