
let arrowDiv = document.getElementById('arrowContainer');
let aboutImageLightDiv = document.getElementById('img2');
let sec1TextDiv = document.getElementById('sec1Slides');
let slideNum = 1;
let hamburger = document.getElementById('hamburger');
let closeIcon = document.getElementById('closeIcon');

setArrowWidths();

if (window.innerWidth < 376) {
    hamburger.addEventListener('click', () => {
        showLinksMobile();
    })
}
window.onresize = () => {
    setArrowWidths();
    if (window.innerWidth < 376) {
        hamburger.addEventListener('click', () => {
            showLinksMobile();
        })
    } else if (window.innerWidth > 376) {
        hamburger.addEventListener('click', () => {
            showLinksDesktop();
        })
    }
}

function setArrowWidths() {

    let width = 0;
    let height = 0;

    if (window.innerWidth > 375) {
        let start = sec1TextDiv.getBoundingClientRect().left;
        let end = aboutImageLightDiv.getBoundingClientRect().left;

        width = end - start;
        height = width / 2;
    } else {
        width = "100";
        height = "50";
    }



    arrowDiv.style.width = width + "px";
    arrowDiv.style.height = height + "px";

}

document.getElementById('slideLeft').addEventListener('click', () => {
    let x = -1;
    setSlides(x);
});
document.getElementById('slideRight').addEventListener('click', () => {
    let x = 1;
    setSlides(x);
});

function setSlides(x) {

    if (slideNum == 3 && x == 1) {
        slideNum = 1;
    } else if (slideNum == 1 && x == -1) {
        slideNum = 3;
    } else {
        slideNum = slideNum + x;
    }

    let sec1Image = document.getElementById('sec1Image');
    let sec1Head = document.getElementById('sec1Head');
    let sec1Body = document.getElementById('sec1Body');

    switch (slideNum) {
        case 1:
            sec1Image.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
            sec1Head.innerHTML = "Discover innovative ways to decorate";
            sec1Body.innerHTML = "        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.Find the furniture pieces you need, from traditional to contemporary styles or anything in between.Product specialists are available to help you create your dream space.";
            break;
        case 2:
            sec1Image.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
            sec1Head.innerHTML = "We are available all across the globe";
            sec1Body.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            break;
        case 3:
            sec1Image.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
            sec1Head.innerHTML = "Manufactured with the best materials";
            sec1Body.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;
    }
    if (window.innerWidth < 376) {
        switch (slideNum) {
            case 1:
                sec1Image.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
                break;
            case 2:
                sec1Image.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
                break;
            case 3:
                sec1Image.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
                break;
        }
    }
}

function showLinksDesktop() {
    let header = document.getElementsByTagName('header')[0];
    let ulLinks = header.getElementsByTagName('ul')[0];
    let ulLi = ulLinks.getElementsByTagName('li');
    let links = ulLinks.getElementsByTagName('a');

    header.style.backgroundColor = "transparent";
    ulLinks.style.display = "inline-block";
    hamburger.style.display = "none";
    logo.style.display = "inline-block";
    closeIcon.style.display = "none";

    closeIcon.addEventListener('click', () => {
        closeLinks();
    });

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
        links[i].style.fontSize = "22px";
        links[i].style.fontWeight = "600";
    }
    for (let i = 0; i < links.length; i++) {
        ulLi[i].style.width = "50px";
    }
}

function showLinksMobile() {
    let header = document.getElementsByTagName('header')[0];
    let ulLinks = header.getElementsByTagName('ul')[0];
    let ulLi = ulLinks.getElementsByTagName('li');
    let links = ulLinks.getElementsByTagName('a');

    header.style.backgroundColor = "white";
    ulLinks.style.display = "inline-block";
    hamburger.style.display = "none";
    logo.style.display = "none";
    closeIcon.style.display = "inline-block";

    closeIcon.addEventListener('click', () => {
        closeLinks();
    });

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
        links[i].style.fontSize = "12px";
        links[i].style.fontWeight = "700";
    }
    for (let i = 0; i < links.length; i++) {
        ulLi[i].style.width = "50px";
    }

}
function closeLinks() {
    let header = document.getElementsByTagName('header')[0];
    let ulLinks = header.getElementsByTagName('ul')[0];
    let ulLi = ulLinks.getElementsByTagName('li');
    let links = ulLinks.getElementsByTagName('a');

    header.style.backgroundColor = "transparent";
    ulLinks.style.display = "none";
    hamburger.style.display = "inline-block";
    logo.style.display = "inline-block";
    closeIcon.style.display = "none";

}