function copyContractAddress() {
  const address = "CvSTs9Nvus7DEmcHwr64JXpqYoGsjhUBSJ5LyVpqpump";
  
  // Fallback for older browsers
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = address;
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
  const btn = document.querySelector('.copy-btn');
  const text = btn.querySelector('.copy-text');
  if (text) {
    text.textContent = 'Copied!';
    btn.classList.add('bg-green-500');
    setTimeout(() => {
      text.textContent = 'Copy';
      btn.classList.remove('bg-green-500');
    }, 2000);
  }
}
