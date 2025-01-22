document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const moodButtons = document.querySelectorAll(".mood-button"); // Update this selector based on your HTML
    const moodDropdown = document.getElementById("mood-dropdown"); // If using a dropdown
  
    // Log navigation for debugging
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        console.log(`Navigating to: ${link.getAttribute("href")}`);
      });
    });
  
    // Handle mood button selection
    moodButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedMood = button.dataset.mood; // Assuming a data-mood attribute on buttons
        saveMood(selectedMood);
      });
    });
  
    // Handle mood dropdown selection (if applicable)
    if (moodDropdown) {
      moodDropdown.addEventListener("change", () => {
        const selectedMood = moodDropdown.value;
        saveMood(selectedMood);
      });
    }
  });
  
  // Function to save mood to localStorage
  function saveMood(mood) {
    // Retrieve the current mood history or initialize it as an empty array
    let moodHistory = JSON.parse(localStorage.getItem("moods")) || [];
  
    // Add the selected mood with a timestamp
    const moodEntry = {
      mood: mood,
      timestamp: new Date().toISOString(),
    };
  
    moodHistory.push(moodEntry);
  
    // Save the updated array back to localStorage
    localStorage.setItem("moods", JSON.stringify(moodHistory));
  
    // Provide user feedback and redirect (if needed)
    alert(`Mood '${mood}' saved successfully!`);
    window.location.href = "data.html"; // Redirect to the data trends page
  }
  