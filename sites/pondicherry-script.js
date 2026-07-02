// Initialize Google Map
function initMap() {
    // Pondicherry coordinates
    const pondicherry = { lat: 11.9416, lng: 79.8083 };
    
    // Map options
    const mapOptions = {
        zoom: 13,
        center: pondicherry,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#1976d2"}]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Define locations
    const locations = [
        {
            position: { lat: 11.9416, lng: 79.8083 },
            title: 'Rock Beach',
            description: 'A scenic promenade along the Bay of Bengal, perfect for evening walks and sunrise views.'
        },
        {
            position: { lat: 11.9247, lng: 79.8277 },
            title: 'Sacred Heart Basilica',
            description: 'A stunning neo-Gothic church with beautiful stained glass windows and French colonial architecture.'
        },
        {
            position: { lat: 12.0056, lng: 79.8083 },
            title: 'Auroville',
            description: 'An experimental township dedicated to human unity and sustainable living.'
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
            content: `<div style="padding: 10px;">
                        <h3 style="color: #0d47a1; margin-bottom: 5px;">${location.title}</h3>
                        <p style="color: #1565c0;">${location.description}</p>
                      </div>`
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

// Observe all cards
document.querySelectorAll('.place-card, .activity-card, .food-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
}); 