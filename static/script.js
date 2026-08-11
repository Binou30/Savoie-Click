const seuilOrdi = 1024;
      if (window.innerWidth < seuilOrdi) {
        document.body.classList.add('mobile-bloque');
        document.getElementById('message-mobile').classList.add('actif');
}