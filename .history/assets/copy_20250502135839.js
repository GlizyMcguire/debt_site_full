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
  