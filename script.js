// Greenwood Library - reveal sections with the Tailwind "animate-fade-up" animation
// (defined in the Tailwind config inside index.html) as they scroll into view.

var items = document.querySelectorAll("[data-reveal]");

function reveal(element) {
    element.classList.add("animate-fade-up");
}

if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach(function (item) {
        observer.observe(item);
    });
} else {
    // Very old browsers: just show everything
    items.forEach(reveal);
}
