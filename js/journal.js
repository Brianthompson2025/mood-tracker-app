// journal.js
document.addEventListener("DOMContentLoaded", () => {
    const journalInput = document.getElementById("journal-entry");
    const saveButton = document.getElementById("save-entry");
    const journalList = document.getElementById("journal-entries");
  
    const loadEntries = () => {
      const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
      journalList.innerHTML = entries
        .map(entry => `<li>${entry.timestamp}: ${entry.text}</li>`)
        .join("");
    };
  
    saveButton.addEventListener("click", () => {
      const text = journalInput.value.trim();
      if (!text) {
        alert("Please write something before saving!");
        return;
      }
  
      const timestamp = new Date().toLocaleString();
      const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
      entries.push({ text, timestamp });
      localStorage.setItem("journalEntries", JSON.stringify(entries));
  
      journalInput.value = "";
      loadEntries();
    });
  
    loadEntries(); // Load entries on page load
  });
  