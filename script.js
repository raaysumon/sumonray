
        // Initialize particles
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#8b5cf6" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#06b6d4",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });

        // Mobile menu toggle
        document.getElementById('menuBtn').addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

        // Intersection Observer for section animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-hidden').forEach(section => {
            observer.observe(section);
        });

        // Add current year to footer
        document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Sumon Ray. All rights reserved.`;

        // togglemode
        const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('pure-dark');

    // Change icon
    const icon = modeToggle.querySelector('i');
    if (document.body.classList.contains('pure-dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // optional: sun for pure dark
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});


// message


(function () {
    emailjs.init("JQnIyfJwnIP3vDRbR"); // EmailJS Public Key
})();



document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const statusText = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // UI loading state
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        statusText.textContent = "";

        // Collect form data
        const params = {
            from_name: form.name.value.trim(),
            from_email: form.email.value.trim(),
            subject: form.subject.value.trim(),
            message: form.message.value.trim(),
        };

        // Send email
        emailjs.send(
            "service_94sts5a",     // example: service_x7k9abc
            "template_rztfe9z",    // example: template_contact01
            params
        )
        .then(() => {
            statusText.textContent = "✅ Message sent successfully!";
            statusText.className = "text-green-400 text-center text-sm mt-3";
            form.reset();
        })
        .catch((err) => {
            console.error("EmailJS Error:", err);
            statusText.textContent = "❌ Failed to send message. Please try again.";
            statusText.className = "text-red-400 text-center text-sm mt-3";
        })
        .finally(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
        });
    });

});


