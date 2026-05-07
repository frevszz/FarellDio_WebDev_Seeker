function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu-outline"
    ? ((e.name = "close-outline"),
      list.classList.add("top-full"),
      list.classList.add("opacity-100"),
      list.classList.remove("opacity-0"),
      list.classList.remove("z-[-1]"),
      list.classList.add("z-50"),
      list.classList.add("bg-white"))
    : ((e.name = "menu-outline"),
      list.classList.remove("top-full"),
      list.classList.remove("opacity-100"),
      list.classList.add("opacity-0"),
      list.classList.add("z-[-1]"),
      list.classList.remove("z-50"),
      list.classList.remove("bg-white"));
}

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});

const inputJarak = document.getElementById("jarak");
const inputAC = document.getElementById("durasi-ac");
const inputLaptop = document.getElementById("durasi-laptop");
const displayHasil = document.getElementById("total-emisi");
const progressBar = document.getElementById("progress-bar");
const containerImpact = document.getElementById("impact-container");
const btnCalculate = document.getElementById("btn-calculate");
const btnReset = document.getElementById("btn-reset");
const loadIcon = document.getElementById("load-icon");

function updateColorRealTime() {
  const jarak = parseFloat(inputJarak.value) || 0;
  const durasiAC = parseFloat(inputAC.value) || 0;
  const durasiLaptop = parseFloat(inputLaptop.value) || 0;

  // JENIS KENDARAAN
  const jenisKendaraan = document.querySelector(
    'input[name="vehicle"]:checked',
  ).value;

  // RUMUS HITUNG
  const koefKendaraan = jenisKendaraan === "mobil" ? 0.2 : 0.1;
  const total = jarak * koefKendaraan + durasiAC * 0.5 + durasiLaptop * 0.05;

  // UPDATE WARNA BACKGROUND REAL-TIME
  const container = document.getElementById("impact-container");
  if (container) {
    container.style.transition = "background-color 0.5s ease";
    if (total <= 2) {
      container.style.backgroundColor = "#154212";
    } else if (total <= 5) {
      container.style.backgroundColor = "#D97706";
    } else {
      container.style.backgroundColor = "#991B1B";
    }
  }
}

// HITUNG EMISI KHUSUS CALCULATOR
function hitungEmisi() {
  const jarak = parseFloat(inputJarak.value) || 0;
  const durasiAC = parseFloat(inputAC.value) || 0;
  const durasiLaptop = parseFloat(inputLaptop.value) || 0;

  // JENIS KENDARAAN
  const jenisKendaraan = document.querySelector(
    'input[name="vehicle"]:checked',
  ).value;

  // RUMUS HITUNG
  const koefKendaraan = jenisKendaraan === "mobil" ? 0.2 : 0.1;
  const total = jarak * koefKendaraan + durasiAC * 0.5 + durasiLaptop * 0.05;

  // DISPLAY HASIL (hanya saat Calculate di-klik)
  displayHasil.innerText = total.toFixed(2);

  // UBAH LOAD-ICON JADI HASIL EMISI
  loadIcon.innerHTML = `<p class="text-3xl font-bold text-white">${total.toFixed(2)}</p>`;

  // UBAH PROCESS JADI "KG CO2e"
  const processText = document.getElementById("process");
  processText.innerText = "KG CO2e";

  // UPDATE PROGRESS BAR
  const persen = Math.min((total / 15) * 100, 100);
  progressBar.style.width = persen + "%";
}

function resetTampilan() {
  displayHasil.innerText = "0";
  progressBar.style.width = "0%";
  containerImpact.style.backgroundColor = "#154212";
  inputJarak.value = "";
  inputAC.value = "";
  inputLaptop.value = "";

  // RESET LOAD ICON
  loadIcon.innerHTML = `<div id="circle-result" class="flex items-center justify-center w-12 h-12 border-[2px] border-[#93a788] rounded-full">
    <div id="loading-dots" class="flex gap-1"><div class="w-1.5 h-1.5 bg-[#93a788] rounded-full">
    </div>
      <div class="w-1.5 h-1.5 bg-[#93a788] rounded-full">
      </div>
      <div class="w-1.5 h-1.5 bg-[#93a788] rounded-full">
      </div>
    </div>
  </div>`;

  // RESET TEXT PROCESS
  const processText = document.getElementById("process");
  processText.innerText = "AWAITING DATA";
}

// EVENT LISTENERS
// WARNA BG UPDATE
if (inputJarak) inputJarak.addEventListener("input", updateColorRealTime);
if (inputAC) inputAC.addEventListener("input", updateColorRealTime);
if (inputLaptop) inputLaptop.addEventListener("input", updateColorRealTime);

// UPDATE WARNA BG KALO BEDA KENDARAAN
document.querySelectorAll('input[name="vehicle"]').forEach((radio) => {
  radio.addEventListener("change", updateColorRealTime);
});

// SUBMIT
if (btnCalculate) {
  btnCalculate.addEventListener("click", hitungEmisi);
}

// RESET (CALCULATOR)
if (btnReset) {
  btnReset.addEventListener("click", resetTampilan);
}

// MONTHLY PROGRESS - PERSISTENT VIA LOCALSTORAGE
const MONTHLY_LIMIT = 450;

// NGEHITUNG PER 30 HARI
function getMonthlyKey() {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - 30);
  return `eco_30days_${start.toISOString().slice(0, 10)}_to_${now.toISOString().slice(0, 10)}`;
}

// NYIMPEN DATA BULANAN
function getMonthlyTotal() {
  return parseFloat(localStorage.getItem(getMonthlyKey())) || 0;
}

// NAMBAHIN DATA BARU KE DATA YG UDH ADA
function addToMonthlyTotal(value) {
  const current = getMonthlyTotal();
  const updated = current + value;
  localStorage.setItem(getMonthlyKey(), updated.toFixed(2));
  return updated;
}

// UPDATE PROGRESS BAR
function updateMonthlyProgressBar(total) {
  const monthlyBar = document.getElementById("monthly-progress-bar");
  const monthlyPercent = document.getElementById("monthly-percent");
  if (!monthlyBar || !monthlyPercent) return;

  const persen = Math.min((total / MONTHLY_LIMIT) * 100, 100);
  monthlyBar.style.width = persen + "%";
  monthlyPercent.innerText = persen.toFixed(1) + "%";
}

// NGELOAD DATA YG DISIMPEN PAS REFRESH ATAU BUKA WEB
updateMonthlyProgressBar(getMonthlyTotal());

// HITUNG EMISI KHUSUS BUAT YG PROGRESS BULANAN
if (btnCalculate) {
  btnCalculate.addEventListener("click", function () {
    const jarak = parseFloat(inputJarak?.value) || 0;
    const durasiAC = parseFloat(inputAC?.value) || 0;
    const durasiLaptop = parseFloat(inputLaptop?.value) || 0;
    const jenisKendaraan = document.querySelector(
      'input[name="vehicle"]:checked',
    )?.value;
    const koefKendaraan = jenisKendaraan === "mobil" ? 0.2 : 0.1;
    const total = jarak * koefKendaraan + durasiAC * 0.5 + durasiLaptop * 0.05;

    const newMonthly = addToMonthlyTotal(total);
    updateMonthlyProgressBar(newMonthly);
  });
}

// RESET PROGRESS BULANAN
const btnResetMonthly = document.getElementById("btn-reset-monthly");
if (btnResetMonthly) {
  btnResetMonthly.addEventListener("click", function () {
    if (confirm("Yakin nich mau reset datanyaa?")) {
      localStorage.removeItem(getMonthlyKey());
      updateMonthlyProgressBar(0);
    }
  });
}

// KATA KATA MOTIVASI
const tips = [
  "Mulai dari satu langkah kecil. Centang aksi pertamamu hari ini!",
  "Geloo, ganteng juga kamu hari ini! lanjutkann gasihh",
  "Nice movee! lessgoo 2040 Indonesia emas!",
  "Orang ganteng mah menjaga lingkungan, dikit lagii yuk!",
  "Cepet selsein pliss abis itu main valo push imo kitaa!",
  "Behh udah ganteng, suka jaga lingkungan lagi! Sehat selalu orang baik, makasii ya ganteng uda jaga lingkungan hari ini!",
];

let totalDone = 0;

const tipText = document.getElementById("tips");

function updateTip() {
  tipText.textContent = tips[totalDone];
}

// LOGIC DONE ACTIVITY
document.querySelectorAll(".btn-done").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".actCard");
    const text = card.querySelector(".activity");

    const isDone = card.classList.toggle("bg-gray-200");
    card.classList.toggle("bg-white");
    text.classList.toggle("text-[#154212]");
    text.classList.toggle("text-gray-400");
    text.classList.toggle("line-through");
    btn.classList.toggle("bg-green-600");
    btn.classList.toggle("bg-gray-400");

    // HITUNG TOTAL DONE
    totalDone += isDone ? 1 : -1;
    updateTip();

    console.log("Activity selesai: " + totalDone + "/5");
  });
});
