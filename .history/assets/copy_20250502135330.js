// Contract address constant
const CONTRACT_ADDRESS = "CvSTs9Nvus98988888877hujkimkmkjmu8ikjiuj8"


<script>
  function copyContractAddress() {
    const address = document.getElementById("contract-address").textContent.trim();
    navigator.clipboard.writeText(address).then(() => {
      const btn = document.querySelector(".copy-btn .copy-text");
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }
</script>
