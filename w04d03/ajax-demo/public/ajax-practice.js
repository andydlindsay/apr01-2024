console.log('inside ajax-practice');

$.ajax({
  method: 'GET',
  url: 'https://www.dnd5eapi.co/api/classes',
  success: (classes) => {
    console.log(classes);
  },
  error: (err) => {
    console.log(err);
  }
});
