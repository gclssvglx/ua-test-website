window.onload = function (event) {
  var elements = document.getElementsByClassName('event-link-click');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', handleLinkClick);
  }

  var buttons = document.getElementsByClassName('virtual-pageview');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleVirtualPageview);
  }

  var form = document.getElementById('form-one');
  form.addEventListener('submit', handleFormSubmit);
}
