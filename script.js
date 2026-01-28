fetch("PASTE_URL_WEB_APP_DI_SINI")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("produk");

    data.forEach(item => {
      container.innerHTML += `
        <div class="card">
          <img src="${item.gambar}" alt="">
          <h3>${item.nama_product}</h3>
          <p>Ukuran: ${item.ukuran}</p>
          <p>Mutu: ${item.mutu}</p>
          <p>Harga: Rp ${item.harga}</p>
          <p>Stok: ${item.stock}</p>
        </div>
      `;
    });
  });
