document.addEventListener("DOMContentLoaded", () => {
    // Retrieve mood data from localStorage
    const moodHistory = JSON.parse(localStorage.getItem("moods")) || [];
    const dataSection = document.getElementById("data-section");
    const moodDisplay = document.getElementById("mood-display");
  
    // Check if there is any data
    if (moodHistory.length === 0) {
      // Display message if no mood data is available
      dataSection.innerHTML = "<p>No mood data available. Please select a mood to see trends.</p>";
      return;
    }
  
    // Display the latest mood
    const latestMood = moodHistory[moodHistory.length - 1];
    moodDisplay.innerHTML = `<p>Latest Mood: <strong>${latestMood.mood}</strong> at ${new Date(
      latestMood.timestamp
    ).toLocaleString()}</p>`;
  
    // Aggregate mood frequencies
    const moodCounts = moodHistory.reduce((counts, entry) => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
      return counts;
    }, {});
  
    // Generate chart labels and data
    const labels = Object.keys(moodCounts);
    const data = Object.values(moodCounts);
  
    // Ensure the canvas exists for the chart
    const canvas = document.getElementById("mood-chart");
    if (!canvas) {
      dataSection.innerHTML += "<p>Error: Chart canvas not found.</p>";
      return;
    }
  
    // Create the bar chart using Chart.js
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Mood Frequency",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  