const PACKAGE_DESTINATIONS = {
  "Madurai Temple Tour": "/blog/madurai.html",
  "Hampi Heritage Tour": "/blog/hampi.html",
  "Mysore Palace Tour": "/blog/mysore.html",
  "Munnar Tea Tour": "/blog/munnar.html",
  "Pondicherry French Tour": "/blog/pondicherry.html"
};

function initMainPage() {
  const profileImage = document.getElementById("profileImage");
  const profilePlaceholder = document.getElementById("profilePlaceholder");
  const logoutBtn = document.getElementById("logoutBtn");
  const profileLink = document.getElementById("profileLink");
  const dropdownContent = document.getElementById("dropdownContent");

  if (profileLink && dropdownContent) {
    profileLink.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
      if (!profileLink.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = "/login.html";
      return;
    }

    if (profilePlaceholder) profilePlaceholder.style.display = "none";
    if (profileImage) {
      profileImage.style.display = "block";
      profileImage.src = user.photoURL || "https://ui-avatars.com/api/?name=User&background=random";
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => logout("/login.html"));
  }

  initPackageCards();
  initTestimonials();
  initPackagesSwiper();
}

function initPackageCards() {
  document.querySelectorAll(".popular__card").forEach((card) => {
    const title = card.querySelector("h4")?.textContent?.trim();
    const destination = PACKAGE_DESTINATIONS[title];
    if (!destination) return;

    card.style.cursor = "pointer";
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => {
      window.location.href = destination;
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = destination;
      }
    });
  });
}

function initPackagesSwiper() {
  if (typeof Swiper === "undefined") return;

  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

function initTestimonials() {
  const testimonials = [
    {
      name: "Emma Johnson",
      role: "Travel Blogger",
      text: "This travel platform turned my bucket list dreams into reality! The booking process was seamless, and their team provided excellent guidance on must-visit spots.",
      image: "/assets/client-1.jpg"
    },
    {
      name: "David Chen",
      role: "Adventure Enthusiast",
      text: "The attention to detail and personalized service exceeded my expectations. From the initial planning to the final day of my trip, everything was perfectly organized.",
      image: "/assets/client-2.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Family Traveler",
      text: "Traveling with kids can be challenging, but this platform made it so much easier. They understood our family's needs and recommended perfect destinations and activities.",
      image: "/assets/client-3.jpg"
    }
  ];

  const testimonialCard = document.querySelector(".client__card");
  const prevBtn = document.querySelector(".client__btns .btn:first-child");
  const nextBtn = document.querySelector(".client__btns .btn:last-child");
  if (!testimonialCard || !prevBtn || !nextBtn) return;

  let currentTestimonial = 0;

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialCard.innerHTML = `
      <img src="${testimonial.image}" alt="client" />
      <div class="client__content">
        <h4>${testimonial.name}</h4>
        <h5>${testimonial.role}</h5>
        <p>${testimonial.text}</p>
      </div>
    `;
  }

  prevBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  });

  updateTestimonial();
}
