document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Greeting based on South African Standard Time
    const updateGreeting = () => {
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 12) greeting = "Good Morning";
        else if (hour < 18) greeting = "Good Afternoon";
        else greeting = "Good Evening";

        const greetingEl = document.getElementById('greeting');
        if (greetingEl) greetingEl.innerText = `${greeting}, Visitor.`;
    };

    // 2. Real-time Age Calculation (Born 2003/04/08)
    const calculateAge = () => {
        const birthDate = new Date('2003-04-08');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        const ageEl = document.getElementById('age-display');
        if (ageEl) ageEl.innerText = `${age} YEARS OLD`;
    };

    // 3. Modern Scroll Reveal (Intersection Observer)
    const scrollReveal = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        // Select all sections and project cards to animate them as you scroll
        document.querySelectorAll('.library-section, .card').forEach(el => {
            el.classList.add('reveal-hidden');
            observer.observe(el);
        });
    };

    updateGreeting();
    calculateAge();
    scrollReveal();
});