let mode = "class";
const $ = id => document.getElementById(id);
$("yr").textContent = new Date().getFullYear();
$("wa").href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hello Dr. Ameer Ali, I want to know about chemistry classes.");

function setMode(m){
  mode = m;
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.t === m));
  $("submit").textContent = m === "demo" ? "Book my free demo" : "Book my class";
  $("dl").textContent = m === "demo" ? "Preferred demo date" : "Preferred start date";
}
document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => setMode(b.dataset.t));
document.querySelectorAll("[data-tab]").forEach(a => a.addEventListener("click", () => {
  setMode(a.dataset.tab);
  if (a.dataset.prog) $("prog").value = a.dataset.prog;
}));
$("date").min = new Date().toISOString().split("T")[0];

$("form").addEventListener("submit", e => {
  e.preventDefault();
  const text = [
    "*" + (mode === "demo" ? "Demo class request" : "Class booking") + " – ChemAmeerali*",
    "Name: " + $("name").value,
    "Phone: " + $("phone").value,
    "Email: " + ($("email").value || "-"),
    "Program: " + $("prog").value,
    "Mode: " + $("mode").value,
    "Preferred date: " + ($("date").value || "-"),
    "Message: " + ($("msg").value || "-")
  ].join("\n");
  $("ok").style.display = "block";
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank");
  e.target.reset();
});
