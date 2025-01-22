document.addEventListener("DOMContentLoaded", () => {
    console.log("settings.js is loaded and DOM is ready.");
    
    const resetButton = document.getElementById("reset-data");
    if (resetButton) {
        console.log("Reset button found:", resetButton);
        resetButton.addEventListener("click", () => {
            console.log("Reset button clicked.");
            if (confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
                localStorage.clear();
                alert("All data has been reset.");
                console.log("Local storage cleared.");
                // Reload the page to reflect the reset state
                location.reload();
            }
        });
    } else {
        console.error("Reset button not found.");
    }
});
