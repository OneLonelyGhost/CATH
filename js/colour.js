function changeColors(className, bgColor, textColor) {
  var elements = document.getElementsByClassName(className);
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      this.style.backgroundColor = bgColor;
      this.style.color = '';
    });
    
    elements[i].addEventListener('mouseout', function() {
      this.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      this.style.backgroundColor = '';
      this.style.color = '';
    });
  }
}