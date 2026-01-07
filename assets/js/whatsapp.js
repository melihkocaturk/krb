function sendToWhatsApp() {
  let number = "+905465665509";
  let type = document.getElementById('type').value;
  let m2 = document.getElementById('m2').value;
  let room = document.getElementById('room').value;
  let address = document.getElementById('address').value;
  let phone = document.getElementById('phone').value;

  var url = "https://wa.me/" + number + "?text="
    + "Gayrimenkul Türü : " + type + "%0A"
    + "Metrekare : " + m2 + "%0A"
    + "Oda Sayısı : " + encodeURIComponent(room) + "%0A"
    + "Adres : " + address + "%0A"
    + "Telefon : " + phone + "%0A";

  window.open(url, '_blank').focus();
}