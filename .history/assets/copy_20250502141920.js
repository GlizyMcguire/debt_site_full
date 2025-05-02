function copyContractAddress() {
  const address = "CvSTs9Nvus7DEmcHwr64JXpqYoGsjhUBSJ5LyVpqpump";
  
  // Fallback for older browsers
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = address;
    textArea.style.position = 'fixed';
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showCopiedMessage();
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  } else {
    // Modern browsers
    navigator.clipboard.writeText(address)
      .then(() => showCopiedMessage())
      .catch(err => console.error('Unable to copy to clipboard', err));
  }
}

function showCopiedMessage() {
  const buttons = document.querySelectorAll('.copy-btn');
  buttons.forEach(btn => {
    const text = btn.querySelector('.copy-text');
    if (text) {
      const originalText = text.textContent;
      text.textContent = 'Copied!';
      btn.classList.add('bg-green-500');
      setTimeout(() => {
        text.textContent = originalText;
        btn.classList.remove('bg-green-500');
      }, 2000);
    }
  });
}
