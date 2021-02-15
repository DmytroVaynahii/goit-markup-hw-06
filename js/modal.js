(() => {
    const refs = {
      openModalBtn: document.querySelector('[window-open]'),
      closeModalBtn: document.querySelector('[window-close]'),
      modal: document.querySelector('[wimdow-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();