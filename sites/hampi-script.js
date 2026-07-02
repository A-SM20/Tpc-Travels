// Initialize Google Map
function initMap() {
    // Hampi coordinates
    const hampi = { lat: 15.3350, lng: 76.4600 };
    
    // Map options
    const mapOptions = {
        zoom: 13,
        center: hampi,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e0e0e0"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Define locations
    const locations = [
        {
            position: { lat: 15.3350, lng: 76.4600 },
            title: 'Virupaksha Temple',
            description: 'Ancient temple dedicated to Lord Shiva, featuring intricate carvings and a towering gopuram.'
        },
        {
            position: { lat: 15.3417, lng: 76.4744 },
            title: 'Vittala Temple',
            description: 'Famous for its musical pillars and the iconic stone chariot, this temple showcases exceptional architecture.'
        },
        {
            position: { lat: 15.3350, lng: 76.4600 },
            title: 'Hemakuta Hill',
            description: 'Offers panoramic views of Hampi and is dotted with ancient temples and boulder formations.'
        }
    ];

    // Add markers for each location
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h3 style="color: #757575; margin-bottom: 5px;">${location.title}</h3>
                    <p style="color: #666;">${location.description}</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate cards on scroll
const cards = document.querySelectorAll('.place-card, .activity-card, .food-card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
}); 