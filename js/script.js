(function(document){
    var designButton = document.getElementById('headingOne');
    var photoButton = document.getElementById('headingTwo');
    var icon1 = document.getElementById('designIcon');
    var icon2 = document.getElementById('photoIcon');
    var open = false;
    
    designButton.addEventListener('click', function(){
      if(open){
        icon1.className = 'fas fa-times';
        icon2.className = 'fas fa-times open';
      } else{
        icon1.className = 'fas fa-times open';
        icon2.className = 'fas fa-times open';
      }
      open = !open;
    });

    photoButton.addEventListener('click', function(){
      if(open){
        icon1.className = 'fas fa-times open';
        icon2.className = 'fas fa-times';
      } else{
        icon1.className = 'fas fa-times open';
        icon2.className = 'fas fa-times open';
      }
      open = !open;
    });

  })(document);