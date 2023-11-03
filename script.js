  const envelopeContainer = document.getElementById("envelope-container");
      const envelope = document.querySelector(".envelope"); // Sử dụng querySelector với class "envelope"
        const book = document.querySelector(".book");
        const bookFirst = document.querySelector(".book-first");
      let isEnvelopeOpen = false;

      envelope.addEventListener("click", () => {
        if (!isEnvelopeOpen) {
            envelope.classList.add("open");
          book.classList.add("open"); 
          bookFirst.classList.add("open");
        }
      });