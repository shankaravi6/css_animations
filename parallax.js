function scrollHandler() {
    const triggerBtn = window.innerHeight / 5 * 4;
    const hidElements = document.querySelectorAll('section');

    hidElements.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log("elemheight", boxTop);

        if (boxTop < triggerBtn) {
            box.classList.add('show-animate');
        } else {
            box.classList.remove('show-animate');
        }
    });
}

window.addEventListener('scroll', scrollHandler);

scrollHandler();