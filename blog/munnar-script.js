// Initialize Google Maps
function initMap() {
    // Munnar coordinates
    const munnar = { lat: 10.0889, lng: 77.0595 };
    
    // Create map centered on Munnar
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: munnar,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            }
        ]
    });

    // Add markers for important locations
    const locations = [
        {
            position: { lat: 10.0889, lng: 77.0595 },
            title: 'Eravikulam National Park',
            description: 'Home to the endangered Nilgiri Tahr and famous for Neelakurinji flowers'
        },
        {
            position: { lat: 10.0923, lng: 77.0632 },
            title: 'Tea Gardens',
            description: 'Vast expanses of lush green tea plantations'
        },
        {
            position: { lat: 10.0856, lng: 77.0558 },
            title: 'Mattupetty Dam',
            description: 'Scenic reservoir surrounded by rolling hills'
        }
    ];

    // Add markers to the map
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });

        // Add info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="padding: 10px;">
                        <h3 style="margin-bottom: 5px;">${location.title}</h3>
                        <p style="margin: 0;">${location.description}</p>
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

// Add animation on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.place-card, .activity-card, .food-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}); 