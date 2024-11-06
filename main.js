document.querySelectorAll('.example img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.querySelector('.gallery-image-modal');
      modal.showModal(); 
    });
  });
  
  const galleryImageModal = document.querySelector('.gallery-image-modal');
  const galleryBtClose = galleryImageModal.querySelector('.bt-close');
  
  galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close(); 
  });
  