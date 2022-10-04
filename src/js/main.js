
const loader = document.querySelector(".loader");
const main = document.querySelector(".main")

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none'
        // main.classList.remove('hidden')
        setTimeout(() => main.style.opacity = 1, 50);
    }, 5000);
}

init()

const aboutUs = document.querySelector('#aboutus'),
      aboutUsDropdown = document.querySelector('#aboutusdropdown'),
      menuIcon = document.querySelector('#menuicon'),
      menuItems = document.querySelector('#menuitems'),
      contactUs = document.querySelector('#contactus'),
      contactUsDropdown = document.querySelector('#contactusdropdown');

      aboutUsDropdown.style.display = 'none'
      contactUsDropdown.style.display = 'none'

aboutUs.addEventListener('click', () => {
    if (aboutUsDropdown.style.display === 'block') {
        aboutUsDropdown.style.display = 'none'
        console.log(33)
    } 
    else {
        aboutUsDropdown.style.display = 'block'
        console.log(3)
    }
})

contactUs.addEventListener('click', () => {
    if (contactUsDropdown.style.display === 'block') {
        contactUsDropdown.style.display = 'none'
        console.log(33)
    } 
    else {
        contactUsDropdown.style.display = 'block'
        console.log(3)
    }
})

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('hidden')
    menuItems.classList.add('mainshow')
   
})


const galleryImage = document.querySelectorAll('.galleryimg'),
      galleryZoom = document.querySelectorAll('.imagezoom'),
      zoomIcon = document.querySelectorAll('.imagezoom i'),
      modalImg = document.getElementById("img01"),
      captionText = document.getElementById("caption"),
      modal = document.getElementById("myModal");   
      
galleryImage.forEach((img , index) => {
    img.addEventListener('mouseover', () => {
        // console.log(galleryZoom[index])
        galleryZoom[index].classList.remove('iconup')
        galleryZoom[index].classList.add('icondown')
        
    })
    img.addEventListener('mouseout', () => {
        galleryZoom[index].classList.add('iconup')
        galleryZoom[index].classList.remove('icondown')
    })
    img.children[1].addEventListener('click',() => {
        console.log(img.children[0])
        modal.style.display ='block';
        modalImg.src = img.children[0].src
    } )
}) 



// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//REVEAL ELEMENTS 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function revealLeft() {
    var revealsLeft = document.querySelectorAll(".revealleft");

    for (var i = 0; i < revealsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsLeft[i].classList.add("active");
        } else {
            revealsLeft[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealLeft);

function revealRight() {
    var revealsRight = document.querySelectorAll(".revealright");

    for (var i = 0; i < revealsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsRight[i].classList.add("active");
        } else {
            revealsRight[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealRight);
