document.addEventListener("DOMContentLoaded", function () {
    setDefaultDestination();
    updateHotels();
    updateTravelOptions();
    document.getElementById("destination").addEventListener("change", function () {
        updateHotels();
        updateTravelOptions();
    });
});

// Destination-specific travel options
const travelData = {
    munnar: {
        flight: [
            { name: "IndiGo Flight to Munnar - ₹5500", cost: 5500 },
            { name: "Air India Flight to Munnar - ₹7000", cost: 7000 }
        ],
        train: [
            { name: "Munnar Express - ₹1800", cost: 1800 },
            { name: "Superfast to Munnar - ₹2200", cost: 2200 }
        ],
        bus: [
            { name: "KSRTC Bus to Munnar - ₹900", cost: 900 },
            { name: "Volvo to Munnar - ₹1300", cost: 1300 }
        ],
        car: [{ name: "Car Travel to Munnar - ₹6000", cost: 6000 }]
    },
    hampi: {
        flight: [
            { name: "IndiGo Flight to Hampi - ₹4800", cost: 4800 },
            { name: "SpiceJet to Hampi - ₹6500", cost: 6500 }
        ],
        train: [
            { name: "Hampi Express - ₹1600", cost: 1600 },
            { name: "Superfast to Hampi - ₹2000", cost: 2000 }
        ],
        bus: [
            { name: "KSRTC Bus to Hampi - ₹750", cost: 750 },
            { name: "Sleeper Bus to Hampi - ₹1400", cost: 1400 }
        ],
        car: [{ name: "Car Travel to Hampi - ₹5500", cost: 5500 }]
    },
    rameshwaram: {
        flight: [
            { name: "IndiGo Flight to Rameshwaram - ₹5000", cost: 5000 },
            { name: "Air India to Rameshwaram - ₹6800", cost: 6800 }
        ],
        train: [
            { name: "Rameshwaram Express - ₹1700", cost: 1700 },
            { name: "Superfast to Rameshwaram - ₹2100", cost: 2100 }
        ],
        bus: [
            { name: "KSRTC Bus to Rameshwaram - ₹800", cost: 800 },
            { name: "Volvo Bus to Rameshwaram - ₹1200", cost: 1200 }
        ],
        car: [{ name: "Car Travel to Rameshwaram - ₹5800", cost: 5800 }]
    },
    madurai: {
        flight: [
            { name: "IndiGo Flight to Madurai - ₹4900", cost: 4900 },
            { name: "Air India to Madurai - ₹6600", cost: 6600 }
        ],
        train: [
            { name: "Madurai Express - ₹1500", cost: 1500 },
            { name: "Superfast to Madurai - ₹1900", cost: 1900 }
        ],
        bus: [
            { name: "KSRTC Bus to Madurai - ₹850", cost: 850 },
            { name: "Sleeper Bus to Madurai - ₹1250", cost: 1250 }
        ],
        car: [{ name: "Car Travel to Madurai - ₹5200", cost: 5200 }]
    },
    mysore: {
        flight: [
            { name: "IndiGo Flight to Mysore - ₹5100", cost: 5100 },
            { name: "SpiceJet to Mysore - ₹6900", cost: 6900 }
        ],
        train: [
            { name: "Mysore Express - ₹1400", cost: 1400 },
            { name: "Superfast to Mysore - ₹1800", cost: 1800 }
        ],
        bus: [
            { name: "KSRTC Bus to Mysore - ₹820", cost: 820 },
            { name: "Volvo Bus to Mysore - ₹1150", cost: 1150 }
        ],
        car: [{ name: "Car Travel to Mysore - ₹5300", cost: 5300 }]
    }
};

// Hotels Data
const hotelsData = {
    munnar: ["Tea Valley Resort", "Grand Plaza", "Silver Tips"],
    hampi: ["Hampi Heritage Resort", "Clarks Inn", "Evolve Back"],
    rameshwaram: ["Daiwik Hotel", "Hotel SS Grand", "Queen Palace"],
    madurai: ["Fortune Pandiyan", "JC Residency", "The Gateway Hotel"],
    mysore: ["Radisson Blu", "Hotel Roopa", "Royal Orchid Metropole"]
};

// Food cost per destination
const foodCosts = { munnar: 800, hampi: 700, rameshwaram: 600, madurai: 650, mysore: 750 };

// Set default destination from blog page
function setDefaultDestination() {
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get("destination");
    if (destination) {
        document.getElementById("destination").value = destination;
        updateHotels();
        updateTravelOptions();
    }
}

// Show travel options based on destination
function updateTravelOptions() {
    const destination = document.getElementById("destination").value;
    ["travelOptions", "returnOptions"].forEach(type => clearOptions(type));
}

// Clear and update travel options
function clearOptions(type) {
    document.getElementById(type).innerHTML = `<option value="">Select an option</option>`;
}

function showOptions(type) {
    const destination = document.getElementById("destination").value;
    const mode = document.getElementById(type === "travelOptions" ? "travelMode" : "returnTravelMode").value;
    const options = document.getElementById(type);

    options.innerHTML = `<option value="">Select an option</option>`;

    travelData[destination]?.[mode]?.forEach(opt => {
        let option = new Option(opt.name, opt.cost);
        options.add(option);
    });
}

// Update hotels based on destination
function updateHotels() {
    const destination = document.getElementById("destination").value;
    const hotelSelect = document.getElementById("hotel");

    hotelSelect.innerHTML = `<option value="">Select Hotel</option>`;

    if (hotelsData[destination]) {
        hotelsData[destination].forEach(hotel => {
            let opt = new Option(hotel, hotel);
            hotelSelect.add(opt);
        });
    }
}

// Calculate trip cost and show popup
function calculateTrip() {
    let totalCost = parseInt(document.getElementById("travelOptions").value) || 0;
    totalCost += parseInt(document.getElementById("returnOptions").value) || 0;
    totalCost += (foodCosts[document.getElementById("destination").value] || 700) * (parseInt(document.getElementById("stayDays").value) || 1);
    totalCost += 2000 * (parseInt(document.getElementById("stayDays").value) || 1);

    showTotalCost(totalCost);
}

// Show popup with animation
function showTotalCost(cost) {
    document.getElementById("cost-message").innerHTML = `<h2>Total Estimated Cost</h2><p style="font-size: 24px; font-weight: bold; color: #008B8B;">₹${cost}</p>`;
    const overlay = document.getElementById("cost-overlay");
    overlay.style.display = "flex";
    setTimeout(() => {
        overlay.style.opacity = "1";
        document.querySelector(".popup").style.transform = "scale(1)";
    }, 100);
}

// Close popup with animation
function closePopup() {
    const overlay = document.getElementById("cost-overlay");
    document.querySelector(".popup").style.transform = "scale(0.8)";
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}
