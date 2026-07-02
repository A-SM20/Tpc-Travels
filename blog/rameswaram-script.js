// Initialize Google Map
function initMap() {
    // Rameshwaram coordinates
    const rameswaram = { lat: 9.2882, lng: 79.3127 };
    
    // Map options
    const mapOptions = {
        zoom: 13,
        center: rameswaram,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e3f2fd"}]
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
            position: { lat: 9.2882, lng: 79.3127 },
            title: 'Ramanathaswamy Temple',
            description: 'Ancient temple dedicated to Lord Shiva, known for its long corridors and sacred waters.'
        },
        {
            position: { lat: 9.1833, lng: 79.4500 },
            title: 'Dhanushkodi Beach',
            description: 'Beautiful beach where the Bay of Bengal meets the Indian Ocean.'
        },
        {
            position: { lat: 9.2882, lng: 79.3127 },
            title: 'Agni Theertham',
            description: 'Sacred beach where devotees take holy dips before visiting the temple.'
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
                    <h3 style="color: #1976d2; margin-bottom: 5px;">${location.title}</h3>
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