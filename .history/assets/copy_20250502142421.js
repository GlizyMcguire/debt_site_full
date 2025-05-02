function copyContractAddress(elementId = 'main-contract-address') {
  const addressElement = document.getElementById(elementId);
  if (!addressElement) return;
  
  const address = elementId === 'nav-contract-address' ? 
    'CvSTs9Nvus7DEmcHwr64JXpqYoGsjhUBSJ5LyVpqpump' : 
    addressElement.textContent.trim();
  
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
      showCopiedMessage(elementId);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  } else {
    // Modern browsers
    navigator.clipboard.writeText(address)
      .then(() => showCopiedMessage(elementId))
      .catch(err => console.error('Unable to copy to clipboard', err));
  }
}

function showCopiedMessage(elementId) {
  const btn = elementId === 'nav-contract-address' ?
    document.querySelector(`button[onclick="copyContractAddress('${elementId}')"]`) :
    document.querySelector('.copy-btn');
    
  const text = btn.querySelector('.copy-text');
  if (text) {
    const originalText = text.textContent;
    text.textContent = 'Copied!';
    btn.classList.add('bg-green-500');
    setTimeout(() => {
      text.textContent = originalText;
      btn.classList.remove('bg-green-500');
    }, 2000);
  } else {
    // Handle nav button without text
    btn.classList.add('text-green-500');
    setTimeout(() => {
      btn.classList.remove('text-green-500');
    }, 2000);
  }
}
