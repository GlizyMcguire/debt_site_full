document.addEventListener("DOMContentLoaded", function () {
    const copyBtn = document.getElementById("copy-retirement");
    const contractText = document.getElementById("retirement-address");
  
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
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("copy-retirement");
    const address = document.getElementById("retirement-address");
  
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
    