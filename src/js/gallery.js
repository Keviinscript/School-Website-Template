const galleryPageImg = document.querySelectorAll('.zoom'),
      galleryModal = document.querySelector('#galleryModal'),
      galleryModalImg = document.querySelector("#img02"),
      galSpan = document.querySelector('#galleryModal span')

      galleryPageImg.forEach((img, index) => {
        img.addEventListener('click', () => {
            console.log(img.children[0].src)
            galleryModal.style.display = 'block';
            galleryModalImg.src = img.children[0].src
        })
      }) 

// Get the <span> element that closes the modal


// When the user clicks on <galSpan> (x), close the modal
galSpan.onclick = function() {
  galleryModal.style.display = "none";
}      