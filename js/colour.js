function changeColors(className, bgColor, textColor) {
  var elements = document.getElementsByClassName(className);
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = bgColor;
      this.style.color = textColor;
    });
    
    elements[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = '';
      this.style.color = '';
    });
  }
}