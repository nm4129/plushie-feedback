// Get all bear icons and the audio element
const bears = document.querySelectorAll('.bear');
const bearSound = document.getElementById('bearSound');


bears.forEach((bear, index) => {
    bear.addEventListener('click', () => {
      bearSound.currentTime = 0;
      bearSound.play();
      alert("Thanks for your feedback! 😊");
  
      // Send data to SheetDB
      fetch("https://sheetdb.io/api/v1/9jdcxbf3svd7x", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            bear: `bear${index + 1}`,
            timestamp: new Date().toISOString()
          }
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("✅ Success:", data);
      })
      .catch(error => {
        console.error("❌ Error sending to SheetDB:", error);
      });
    });
  });
  