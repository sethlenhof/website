document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let initialDelay = 250;
                    const staggerDelay = 200;

                    // Select all skill bars within the observed entry
                    const skillBars = entry.target.querySelectorAll(
                        ".bar > span:not(.animate)"
                    );

                    // Animate each skill bar
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.classList.add("animate");
                        }, initialDelay + index * staggerDelay);
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.4,
        }
    );

    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});