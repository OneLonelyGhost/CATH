function navStick(rowClass, itemClass) {
  document.addEventListener("DOMContentLoaded", function() {
    var secondRow = document.querySelector(rowClass);
    var secondRowItems = document.querySelector(itemClass);
    var initialTopOffset = secondRow.offsetTop;

    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= initialTopOffset) {
        secondRow.style.position = 'fixed'; // Set the position to fixed to stick our element
        secondRow.style.top = 0 + 'px'; // Set the top to 0 so our element will stick to the top of the screen
        secondRow.style.zIndex = '1000'; // Set a higher z-index value
        secondRowItems.style.backgroundColor = "#f8f9fa";
        secondRowItems.style.borderRadius = "10px"; // Add rounded corners
        
      } else {
        secondRow.style.position = 'static';
        secondRow.style.zIndex = 'auto'; // Reset to default
        secondRow.style.backgroundColor = "";
        secondRowItems.style.borderRadius = "0"; // Reset to default
      }
    });
});
}