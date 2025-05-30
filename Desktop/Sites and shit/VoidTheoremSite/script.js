function showSuccessMessage() {
  // Εμφανίζει το μήνυμα επιτυχίας
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
  
  // Κάνει την φόρμα να εξαφανιστεί μετά την αποστολή
  document.getElementById('contact-form').reset();

  // Κρύβει το μήνυμα μετά από 5 δευτερόλεπτα (5000 ms)
  setTimeout(function() {
    successMessage.style.display = 'none';
  }, 5000); // Αλλάξτε το 5000 σε οποιοδήποτε άλλο χρόνο θέλεις (σε ms)

  // Αποτρέπει την αποστολή της φόρμας για να μην ανανεωθεί η σελίδα
  return false;
}
