document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-xl');
            navbar.classList.remove('shadow-lg');
        } else {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('shadow-xl');
        }
    });

    // 3. Quote Form Handling
    const quoteForm = document.getElementById('quoteForm');
    const formMessage = document.getElementById('formMessage');

    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Gather data
        const name = document.getElementById('qName').value;
        const email = document.getElementById('qEmail').value;
        const destination = document.getElementById('qDest').value;
        const weight = document.getElementById('qWeight').value;
        const details = document.getElementById('qDetails').value;

        // Simulate sending data (Since no backend, we'll show a success message and generate a mailto link)
        formMessage.classList.remove('hidden', 'text-red-500', 'text-green-500');
        formMessage.classList.add('text-green-600');
        formMessage.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing your request...`;

        setTimeout(() => {
            formMessage.innerHTML = `<i class="fas fa-check-circle"></i> Thank you, ${name}! Your quote request for ${weight}kg to ${destination} has been received. We will contact you at ${email} shortly.`;
            
            // Optional: Reset form
            quoteForm.reset();

            // Optional: Construct a mailto link as a fallback
            // window.location.href = `mailto:info@airnationalcourier.com?subject=Quote Request from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ADestination: ${destination}%0D%0AWeight: ${weight}%0D%0ADetails: ${details}`;
            
        }, 1500);
    });

    // 4. Tracking System Simulation
    const trackBtn = document.getElementById('trackBtn');
    const trackingInput = document.getElementById('trackingInput');
    const trackingResult = document.getElementById('trackingResult');

    trackBtn.addEventListener('click', () => {
        const trackingNumber = trackingInput.value.trim().toUpperCase();

        if (!trackingNumber) {
            alert('Please enter a tracking number.');
            return;
        }

        trackingResult.classList.remove('hidden');
        trackingResult.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Searching for ${trackingNumber}...`;

        // Simulate API call delay
        setTimeout(() => {
            // Mock Data Logic
            if (trackingNumber.startsWith('ANC-')) {
                trackingResult.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-bold text-lg">${trackingNumber}</span>
                        <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">In Transit</span>
                    </div>
                    <div class="text-sm text-blue-200 space-y-2">
                        <p><i class="fas fa-plane-departure mr-2"></i> <strong>Lahore, PK:</strong> Shipment picked up and processed.</p>
                        <p><i class="fas fa-plane mr-2"></i> <strong>Karachi, PK:</strong> Departed from origin facility.</p>
                        <p><i class="fas fa-globe mr-2"></i> <strong>Dubai, UAE:</strong> Arrived at transit hub. Awaiting customs clearance.</p>
                    </div>
                    <p class="text-xs text-blue-300 mt-4">Last updated: Just now</p>
                `;
            } else {
                trackingResult.innerHTML = `
                    <div class="text-red-400">
                        <i class="fas fa-exclamation-circle mr-2"></i> Tracking number <strong>${trackingNumber}</strong> not found. Please check the number and try again. (Try using a number starting with 'ANC-')
                    </div>
                `;
            }
        }, 1500);
    });

    // 5. Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 6. Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});