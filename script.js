// Include the qrcode-generator library
// You can download it from: https://github.com/davidshimjs/qrcodejs
// Or include it from a CDN

// Generate the QR code
document.getElementById("generate-btn").addEventListener("click", function () {
  const text = document.getElementById("text-input").value;
  if (text.trim() !== "") {
    const qr = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 128,
      height: 128,
    });

    document.getElementById("download-link").style.display = "block";
    document.getElementById("download-link").href = document
      .getElementById("qrcode")
      .querySelector("canvas")
      .toDataURL();
    document.getElementById("download-link").download = "qrcode.png";
  }
});
