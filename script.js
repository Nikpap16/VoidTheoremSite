function showSuccessMessage() {
 
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
  
 
  document.getElementById('contact-form').reset();

  
  setTimeout(function() {
    successMessage.style.display = 'none';
  }, 5000);


  return false;
}
