const opener = document.getElementById("opener");
const closer = document.getElementById("closer");
  if (opener && closer) {
      const openerDiv = opener.querySelector("div");
      const closerDiv = closer.querySelector("div");

      opener.addEventListener("click", function (e) {
        e.preventDefault();
        openerDiv.classList.add("hidden");
        closerDiv.classList.remove("hidden");

        // window.location.href = this.getAttribute('data-href');
      });

      closer.addEventListener("click", function (e) {
        e.preventDefault();
        closerDiv.classList.add("hidden");
        openerDiv.classList.remove("hidden");

        window.history.back();
      });
    }