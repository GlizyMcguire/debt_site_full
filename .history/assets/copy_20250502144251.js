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

document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copy-retirement");
  const contractText = document.getElementById("contract-address");

  if (copyBtn && contractText) {
    copyBtn.addEventListener("click", () => {
      const text = contractText.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        const label = copyBtn.querySelector(".copy-text");
        label.textContent = "Copied!";
        setTimeout(() => {
          label.textContent = "Copy";
        }, 2000);
      }).catch((err) => {
        console.error("Copy failed", err);
      });
    });
  }
});

// Add fallback for older browsers
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("copy-retirement");
  const address = document.getElementById("contract-address");

  button.addEventListener("click", function () {
    const text = address.innerText.trim();

    // Fallback for older browsers or if clipboard API fails
    if (!navigator.clipboard) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // prevent scroll jump
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        const success = document.execCommand("copy");
        if (success) showCopied(button);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }

      document.body.removeChild(textarea);
    } else {
      navigator.clipboard.writeText(text).then(() => {
        showCopied(button);
      }).catch(err => {
        console.error("Clipboard copy failed", err);
      });
    }
  });

  function showCopied(btn) {
    const textSpan = btn.querySelector(".copy-text");
    if (textSpan) {
      textSpan.textContent = "Copied!";
      setTimeout(() => {
        textSpan.textContent = "Copy";
      }, 2000);
    }
  }
});
