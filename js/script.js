document.addEventListener("DOMContentLoaded", function () {

    console.log("Xntrova Homepage Loaded");


    /* =========================
       CONTACT FORM VALIDATION
    ========================== */

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const service = document.getElementById("service");
            const message = document.getElementById("message");


            const nameError =
                name.parentElement.querySelector(".form-error");

            const emailError =
                email.parentElement.querySelector(".form-error");

            const serviceError =
                service.parentElement.querySelector(".form-error");

            const messageError =
                message.parentElement.querySelector(".form-error");


            nameError.textContent = "";
            emailError.textContent = "";
            serviceError.textContent = "";
            messageError.textContent = "";


            let isValid = true;


            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            } else if (!email.value.includes("@")) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;
            }


            if (service.value === "") {

                serviceError.textContent =
                    "Please select a service.";

                isValid = false;
            }


            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please tell us about your project.";

                isValid = false;
            }


            if (!isValid) {
                return;
            }


            formSuccess.style.display = "block";

            contactForm.reset();

        });

    }



    /* =========================
       SCROLL REVEAL ANIMATION
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =========================
       ACTIVE NAVIGATION
    ========================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");


    window.addEventListener("scroll", function () {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });
    const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

});