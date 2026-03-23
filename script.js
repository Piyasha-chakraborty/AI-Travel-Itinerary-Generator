function generatePlan() {

    let destination = document.getElementById("destination").value.toLowerCase();
    let days = parseInt(document.getElementById("days").value);
    let type = document.getElementById("type").value;

    let plan = "";

    // AI KNOWLEDGE BASE
    let data = {
        goa: ["Beach", "Water Sports", "Night Party", "Cafe Visit"],
        paris: ["Eiffel Tower", "Museum", "Cafe", "Seine River"],
        manali: ["Snow Activities", "Trekking", "Mall Road", "Temple"],
        chennai: ["Marina Beach", "Temple Visit", "Shopping", "Food Tour"]
    };

    if (!data[destination]) {
        document.getElementById("output").innerHTML = "Destination not available";
        return;
    }

    let activities = data[destination];

    // AI INFERENCE ENGINE
    for (let i = 1; i <= days; i++) {

        let activity = activities[i % activities.length];

        if (type === "adventure") {
            activity += " + Adventure Activity";
        } else if (type === "luxury") {
            activity += " + Luxury Experience";
        } else {
            activity += " + Relax Time";
        }

        plan += `<p>Day ${i}: ${activity}</p>`;
    }

    document.getElementById("output").innerHTML = plan;
}