$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      // Here you can add code to handle form submission, e.g., sending an email
      
      // Display a success message
      $('#contact-form').html('<h3>Thank you for your message!</h3>');
    });
  });