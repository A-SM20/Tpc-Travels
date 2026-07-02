# TPC Travels 🌍

TPC Travels is a modern travel and tourism web platform designed to showcase curated travel packages, destination guides, and personalized user experiences. The platform integrates Firebase Authentication, Firestore, and Firebase Hosting to provide secure user access and scalable deployment.

@ https://tpc-travels.web.app/
## Features

### User Authentication

* Google Sign-In using Firebase Authentication
* Secure user login and registration
* User profile management
* Session persistence across visits

### Travel Packages

* Destination-specific travel packages
* Interactive package browsing
* Dedicated pages for each destination
* Detailed itinerary and travel information

### Destinations Included

* Hampi
* Munnar
* Mysore
* Pondicherry
* Rameswaram
* Madurai

### Responsive Design

* Mobile-friendly layout
* Responsive navigation
* Optimized user experience across devices

### Firebase Integration

* Firebase Authentication
* Firestore Database
* Firebase Hosting
* User data storage and retrieval

---

## Project Structure

```text
TPC/
│
├── login.html
├── signup.html
├── profile.html
├── firebase.js
├── firebase.json
├── firestore.rules
├── firestore.indexes.json
│
├── functions/
│   └── Firebase Functions (currently unused)
│
├── tpc landing/
│   ├── main.html
│   ├── styles.css
│   ├── script.js
│   ├── assets/
│   ├── blog/
│   │   ├── hampi.html
│   │   ├── madurai.html
│   │   ├── munnar.html
│   │   ├── mysore.html
│   │   ├── pondicherry.html
│   │   └── rameswaram.html
│   │
│   └── cost/
│
└── public/
```

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend Services

* Firebase Authentication
* Cloud Firestore

### Hosting

* Firebase Hosting

### Version Control

* Git
* GitHub

---

## Firebase Services Used

### Authentication

Google OAuth Sign-In is implemented using Firebase Authentication.

### Firestore

Stores user-related information and application data.

### Hosting

The website is deployed using Firebase Hosting for secure and scalable delivery.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/A-SM20/Tpc-Travels.git
cd Tpc-Travels
```

### Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Login to Firebase

```bash
firebase login
```

### Run Locally

Using VS Code Live Server:

```text
Right Click → main.html → Open with Live Server
```

or

```bash
npx serve .
```

---

## Deployment

Deploy only hosting:

```bash
firebase deploy --only hosting
```

Deploy hosting and Firestore:

```bash
firebase deploy --only hosting,firestore
```

---

## Authentication Flow

```text
User
  │
  ▼
Login / Signup
  │
  ▼
Google OAuth
  │
  ▼
Firebase Authentication
  │
  ▼
Profile Page
  │
  ▼
Travel Dashboard
```

---

## Future Enhancements

* Online booking system
* Payment gateway integration
* Travel reviews and ratings
* Favorites and wishlists
* Admin dashboard
* Email notifications
* Booking history
* Analytics dashboard
* AI-powered travel recommendations

---

## Security

* Firebase Authentication secures user access.
* Firestore Security Rules protect database operations.
* HTTPS enforced through Firebase Hosting.

---

## Contributors

### Ananth
Project Owner & Developer
