function kirimData() {
  $.post(
    // url
    'backend.php',
    // object dan data nya
    {
      nama: $('.nama').val(),
      umur: 25,
    },
    // kembalian dari hasil pengiriman data dijalankan dg callback function
    (data) => {
      console.log(data);
    }
  );
}

// fungsi untuk mengupdate UI dari data array yg berisi object
function updateUI(data, title, id) {
  if (title == 'provinsi.json') {
    // argument data == array yg isi nya object
    // argument title berisi sebuah 'judul'
    // argument id berisi sebuah id dari elemen yg di klik
    let html = '<option value="" selected>Pilih Provinsi</option>';
    let url = document.location.href;
    let urlId = url.charAt(url.length - 2) + url.charAt(url.length - 1);
    data.forEach((spark) => {
      html += `<option class="provinsi" value="${spark.name.toLowerCase()}" data-id="${spark.id}" ${urlId == spark.id ? 'selected' : ''}>${spark.name.toLowerCase()}</option>`;
    });
    return html;
  } else if (title == 'kabupaten.json') {
    let kabupaten = '';
    data.forEach((val) => {
      if (val.province_id == id) {
        kabupaten += `<option class="kabupaten" data-id="${val.id}">${val.name.toLowerCase()}</option>`;
      }
    });
    return kabupaten;
  } else if (title == 'kecamatan.json') {
    let kecamatan = '';
    data.forEach((val) => {
      if (val.regency_id == id) {
        kecamatan += `<option class="kecamatan" data-id="${val.id}">Kec. ${val.name.toLowerCase()}</option>`;
      }
    });
    return kecamatan;
  }
}
