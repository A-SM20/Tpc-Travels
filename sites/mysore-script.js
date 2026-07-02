// Initialize Google Map
function initMap() {
    // Mysore coordinates
    const mysore = { lat: 12.2958, lng: 76.6394 };
    
    // Map options
    const mapOptions = {
        zoom: 13,
        center: mysore,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f3e5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e1bee7"}]
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
            position: { lat: 12.3052, lng: 76.6552 },
            title: 'Mysore Palace',
            description: 'Magnificent royal palace featuring Indo-Saracenic architecture and stunning interiors.'
        },
        {
            position: { lat: 12.2719, lng: 76.6744 },
            title: 'Chamundi Hills',
            description: 'Sacred hill with ancient temple and panoramic views of the city.'
        },
        {
            position: { lat: 12.4257, lng: 76.5727 },
            title: 'Brindavan Gardens',
            description: 'Beautiful gardens with musical fountains and scenic beauty.'
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
                    <h3 style="color: #7b1fa2; margin-bottom: 5px;">${location.title}</h3>
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