form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ambil nilai dari input
      const cowo = document.getElementById("aku").value;
      const cewe = document.getElementById("suka").value;
      const kekurangan = document.getElementById("paw").value;

      // Tampilkan hasil
      hasil.style.display = "block";
      hasil.innerHTML = `
        <h2>DATA PRIBADI</h2>
        <p>Seorang laki-laki ${kekurangan}, ia bernama ${cowo}. Hidupnya selalu dikucilkan dan dibedakan oleh
        semua orang karena kekurangannya. Tentang ia yang telah ditinggalkan oleh ibunya sejak lahir. Lelaki
        dengan segala kesempurnaan hati nya, ia yang tak pernah mengeluh atas segala kesulitan yang menimpa hidupnya.
        Tentang ia yang selalu menyalahkan dirinya atas semua yang telah terjadi. Ia yang selalu tersenyum, meski
        hatinya menangis. ${cowo}, hidupnya selalu merasa Kesepian. Setelah ditinggalkan oleh ibunya sejak ia lahir,
        ayahnya memutuskan untuk menikah lagi. ${cowo} yang masih butuh pelukan sang ayah, ${cowo} kecil yang selalu
        menangis merindukan ayahnya. Namun ayahnya enggan bahkan hanya melihat kepada nya. ${cowo} yang tumbuh menjadi
        seorang lelaki tanpa kasih sayang ayahnya. Saat semua orang membenci ${cowo} karena kekurangan yang ia miliki,
        tapi tidak dengan ${cewe}. "${cowo}," panggilnya yang membuat ${cowo}
        bingung, ia adalah orang pertama yang memberi ${cowo} nama panggilan khusus. Perempuan dengan penuh keteguhan di
        dalam hatinya, perempuan yang tak pernah mengenal rasa takut, perempuan yang selalu menjadi tameng utama untuk
        seorang ${cowo}, si lelaki ${kekurangan}.</p>
    `;
    });