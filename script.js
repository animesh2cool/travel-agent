document.getElementById("travelForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      from: document.getElementById("fromCity").value,
      to: document.getElementById("toCity").value,
      start_date: document.getElementById("startDate").value,
      end_date: document.getElementById("endDate").value,
      adults: parseInt(document.getElementById("adults").value),
      kids: parseInt(document.getElementById("kids").value || 0),
      rooms: parseInt(document.getElementById("rooms").value),
      travel_class: document.getElementById("travelClass").value,
    };
  
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "⏳ Generating your travel plan...";
  
    try {
      const response = await fetch("https://your-huggingface-backend-url/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      resultContainer.innerHTML = `
        <h2>🎒 Your Travel Plan</h2>
        <p>${result.plan || "No plan returned."}</p>
      `;
    } catch (err) {
      resultContainer.innerHTML = "❌ Error fetching travel plan.";
    }
  });
  