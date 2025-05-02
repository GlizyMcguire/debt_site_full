document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("copy-retirement");
    const code = document.getElementById("retirement-address");
  
    if (button && code) {
      button.addEventListener("click", () => {
        const text = code.textContent.trim();
  
        navigator.clipboard.writeText(text).then(() => {
          const label = button.querySelector(".copy-text");
          if (label) {
            label.textContent = "Copied!";
            setTimeout(() => {
              label.textContent = "Copy";
            }, 2000);
          }
        }).catch(err => {
          console.error("Copy failed: ", err);
        });
      });
    }
  });
  