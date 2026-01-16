// Initialize Lucide Icons
lucide.createIcons();

// Scroll Logic for Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            nav.classList.remove('bg-transparent', 'py-8');
        } else {
            nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            nav.classList.add('bg-transparent', 'py-8');
        }
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        // Ensure menu is child of documentElement to fix positioning context
        if (menu.parentElement !== document.documentElement) {
            document.documentElement.appendChild(menu);
        }
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
}

// Intersection Observer for Fade In
function triggerFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Start initial fades on load
window.onload = triggerFadeIn;

// Form Handling Logic
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get inputs
            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const messageInput = document.getElementById('contactMessage');

            // Reset errors
            [nameInput, emailInput, messageInput].forEach(input => {
                if (input) input.classList.remove('error');
            });

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput ? messageInput.value.trim() : '';

            let isValid = true;
            let errorMessage = "";

            // Validation: Name (at least 2 words)
            const nameParts = nameValue.split(' ').filter(part => part.length > 0);
            if (nameParts.length < 2) {
                isValid = false;
                nameInput.classList.add('error');
                errorMessage += "Prosím vyplňte jméno i příjmení.\n";
            }

            // Validation: Email (simple regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                isValid = false;
                emailInput.classList.add('error');
                errorMessage += "Prosím zadejte platný email.\n";
            }

            // Validation: Message (max 300 checked by HTML, but good to check emptiness if needed, though user didn't specify required, we assume it should be)
            if (messageValue.length === 0) {
                isValid = false;
                if (messageInput) messageInput.classList.add('error');
                errorMessage += "Napište nám zprávu.\n";
            }
            if (messageValue.length > 300) {
                isValid = false;
                if (messageInput) messageInput.classList.add('error');
                errorMessage += "Zpráva je příliš dlouhá (max 300 znaků).\n";
            }

            // Validation: Consent Checkbox
            const consentCheckbox = document.getElementById('contactConsent');
            if (consentCheckbox && !consentCheckbox.checked) {
                isValid = false;
                errorMessage += "Musíte souhlasit s podmínkami.\n";
            }

            if (!isValid) {
                alert("Formulář obsahuje chyby:\n" + errorMessage);
                return;
            }

            // Success: Log to console
            const formData = {
                firstName: nameParts[0],
                lastName: nameParts.slice(1).join(' '),
                email: emailValue,
                message: messageValue,
                timestamp: new Date().toISOString()
            };

            console.log("Formulář odeslán:", formData);
            alert("Děkujeme! Zpráva byla úspěšně odeslána.");

            // Clear form
            contactForm.reset();
        });
    }
});

// Custom Cursor Logic
document.addEventListener('DOMContentLoaded', () => {
    // Only on desktop devices (touchscreen check usually needed, but simple width check is okay for now)
    if (window.matchMedia("(pointer: coarse)").matches) {
        return; // Don't enable on touch devices
    }

    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    const outline = document.createElement('div');
    outline.id = 'cursor-outline';

    document.documentElement.appendChild(dot);
    document.documentElement.appendChild(outline);
    document.documentElement.classList.add('custom-cursor-active');
    // Also add to body to keep existing CSS selectors working or update CSS
    // actually CSS uses body.custom-cursor-active. I should update CSS or add class to body too.
    document.body.classList.add('custom-cursor-active');

    // Movement Logic
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Initialize starting positions
    // Check if we have recent mouse position or start at center? Start off-screen usually better or 0,0.

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows instantly
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    const animateCursor = () => {
        // Linear interpolation for smooth trailing effect
        // Speed factor: 0.1 (slower) to 0.3 (faster)
        const speed = 0.15;

        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;

        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    };

    // Start the loop
    animateCursor();

    // Interactive Elements Hover Check
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover-active');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover-active');
        });
    });

    // Dynamic elements observer (optional, but good for lazy loaded stuff)
    // For now, static check is enough for the requested scope.
});

// DOMContentLoaded is already used above, but to be safe and modular, we can add another listener for the lightbox specifically.
document.addEventListener('DOMContentLoaded', () => {
    /* Lightbox Functionality */
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.documentElement.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.style.display = 'flex';
            // Force reflow
            void lightbox.offsetWidth;
            lightbox.classList.add('active');
            lightboxImg.src = image.src;
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300);
        }
    });
});

// View Counter Logic (Option B)
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('view-count');
    if (counterElement) {
        fetch('php.php')
            .then(response => response.text())
            .then(count => {
                counterElement.textContent = count;
            })
            .catch(error => {
                console.error('Error loading view count:', error);
                counterElement.textContent = 'Err';
            });
    }
});