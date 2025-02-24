const scrollRevelOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,

}


//header container

ScrollReveal().reveal(".header_container img", {
    duration: 1000,
})

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevelOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevelOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevelOption,
    delay: 500,
});

//about container

ScrollReveal().reveal(".about_container img", {
    ...scrollRevelOption,
    origin: "left",

});


ScrollReveal().reveal(".about_content h3", {
    ...scrollRevelOption,
    delay: 500,
})


ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevelOption,
    delay: 1000,
})

ScrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevelOption,
    delay: 1500,
})

ScrollReveal().reveal(".about_content .about_grid", {
    ...scrollRevelOption,
    delay: 2000,
});

//contact container

ScrollReveal().reveal(".contact_image img", {
    ...scrollRevelOption,
    origin: "left",
})


const swiper = new Swiper(".swiper", {
    loop:true,
    slidesPerView:"auto",
    centeredSlides:true,
    spaceBetween: 30,
});

