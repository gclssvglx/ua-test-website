function handleLinkClick(event) {
  var anchor = event.target.closest('a');
  ga('send', 'event', 'links', 'click', anchor.getAttribute('id'), anchor.getAttribute('href'));
  gtag('event', 'click', {
    'event_category': 'link',
    'event_label': anchor.getAttribute('id'),
    'value': anchor.getAttribute('href'),
    'send_to': 'ga4'
  });
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
  gtag('event', 'forms', {
    'event_category': 'submit',
    'event_label': form.getAttribute('id'),
    'value': formValues.join(" | "),
    'send_to': 'ga4'
  });
  event.preventDefault();
}
