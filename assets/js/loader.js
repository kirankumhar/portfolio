// Simple preloader: hides the #preloader once window finishes loading
(function(){
  function hidePreloader(){
    var pre = document.getElementById('preloader');
    if(!pre) return;
    pre.classList.add('preloader--hide');
    setTimeout(function(){
      if(pre && pre.parentNode) pre.parentNode.removeChild(pre);
    }, 500);
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }
})();
