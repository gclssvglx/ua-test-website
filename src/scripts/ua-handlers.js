function handleLinkClick(event) {
  var anchor = event.target.closest('a');
  ga('send', 'event', 'links', 'click', anchor.getAttribute('id'), anchor.getAttribute('href'));
  event.preventDefault();
}

function handleVirtualPageview(event) {
  var button = event.target.closest('button');
  ga('send', 'pageview', 'Button ' + button.getAttribute('id') + ' was clicked')
  event.preventDefault();
}

function handleFormSubmit(event) {
  var form = event.target.closest('form');
  var inputs = form.getElementsByTagName('input');
  var formValues = [];
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.getAttribute('type') !== 'submit') {
      formValues.push(input.getAttribute('id') + ' : ' + input.value);
    }
  }
  ga('send', 'event', 'forms', 'submit', form.getAttribute('id'), formValues.join(" | "));
  event.preventDefault();
}
