window.addEventListener('scroll', () => {
    document.getquerySelector('.cube').style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, 
false);
