(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-window-open]'),
      closeModalBtn: document.querySelector('[data-window-close]'),
      modal: document.querySelector('[data-wimdow-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();