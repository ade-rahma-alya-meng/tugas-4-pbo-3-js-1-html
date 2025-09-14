var yakin = confirm("Apakah Kamu Yakin Ingin Membuka Form di page ini ?");
    if (yakin) {
        alert('Selamat Membuat Form Sendiri');
        var paw = prompt("Tuliskan (contoh: ngantuk, capek, semangat):", "ngantuk");
        var jalpa = prompt("Tuliskan aktivitasmu sore (contoh: tugas, olahraga, menggambar):", "tidur");
        // tampilkan teks di console (tidak menghapus form)
        console.log(">>> Kamu berhasil membuka halaman Formulir <<<");
    } else {
         window.location = "https://www.instagram.com/the.jsuniverse?igsh=MTM4bGt0b244bnNtdw==";
    }