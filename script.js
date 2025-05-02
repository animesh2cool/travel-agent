document.getElementById("travelForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    from_city: document.getElementById("fromCity").value,
    to_city: document.getElementById("toCity").value,
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
    const response = await fetch("https://animesh2cool-travel-agent.hf.space", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === "success") {
      resultContainer.innerHTML = `
        <h2>🎒 Your Travel Plan</h2>
        <pre>${result.data}</pre>
      `;
    } else {
      resultContainer.innerHTML = `❌ Error: ${result.message || "Unknown error occurred."}`;
    }

  } catch (err) {
    resultContainer.innerHTML = "❌ Error fetching travel plan.";
  }
});
