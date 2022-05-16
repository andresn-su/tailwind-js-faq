let faqItems = Array.from(document.getElementsByClassName('summary'));

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        let content = faq.nextElementSibling;
        let closed = content.classList.contains("hidden");

        if (closed) {
            // Show content
            content.classList.toggle("hidden");
            faq.classList.toggle("rounded-b-lg");

            setTimeout(() => {
                content.classList.toggle("opacity-0");
            }, 10);
        } else {
            // Hide content
            content.classList.toggle("opacity-0");

            setTimeout(() => {
                content.classList.toggle("hidden");
                faq.classList.toggle("rounded-b-lg");
            }, 300);
        }

        faq.childNodes[1].classList.toggle("rotate-180");
        faq.classList.toggle("shadow-lg");
    });
});

