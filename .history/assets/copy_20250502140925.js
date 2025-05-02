function copyContractAddress() {
    const text = document.getElementById("retirement-address").textContent.trim();
  
    navigator.clipboard.writeText(text).then(() => {
      const label = document.querySelector(".copy-text");
      if (label) {
        label.textContent = "Copied!";
        setTimeout(() => {
          label.textContent = "Copy";
        }, 2000);
      }
    }).catch(err => {
      console.error("Copy failed:", err);
    });
  }
  