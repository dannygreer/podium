document.addEventListener('DOMContentLoaded', function() {
  const urlHash = window.location.hash;

  if (urlHash) {
    const targetId = urlHash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(function() {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Adjust the delay as needed
    }
  }
});
