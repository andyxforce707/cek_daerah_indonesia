$(document).ready(function () {
  console.log('Oke');
  $.ajax({
    // url yg dituju
    url: 'provinsi.json',
    // jika sukses
    success: (results) => {
      // olah data dan tampilkan ke dalam web dg fungsi 'updateUI'
      $('.data-provinsi').html(updateUI(results, 'provinsi.json'));
    },
    // jika gagal
    error: () => $('.data-provinsi').html('<h2>&copy; Cannot get Data!</h2>'),
  });

  $('#data-provinsi').on('click', function () {
    $(this)
      .children()
      .click(function () {
        let id = $(this).data('id');
        // console.log(id);
        $.ajax({
          url: 'kabupaten.json',
          success: (results) => {
            $('#data-kabupaten').html(updateUI(results, 'kabupaten.json', id));
          },
          error: () => {
            console.log('error');
          },
        });
      });
  });

  $('#data-kabupaten').on('click', function () {
    $(this)
      .children()
      .click(function () {
        let id = $(this).data('id');
        // console.log(id);
        $.ajax({
          url: 'kecamatan.json',
          success: (results) => {
            $('#data-kecamatan').html(updateUI(results, 'kecamatan.json', id));
          },
          error: () => {
            console.log('error');
          },
        });
      });
  });
});
