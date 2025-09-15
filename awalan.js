var yakin = confirm("Apakah Kamu Yakin Ingin Membuka Form di page ini ?");
    if (yakin) {
        alert('Selamat Membuat Form Sendiri');
        var paw = prompt("Kamu suka ngapain? (contoh: belajar, baca buku, tidur):", "TIDUR");
        var jalpa = prompt("Kamu suka tugas apa? (contoh: coding, olahraga, menggambar):", "CODING");
        // tampilkan teks di console (tidak menghapus form)
        console.log(">>> Kamu berhasil membuka halaman Formulir <<<");
    } else {
         window.location = "https://www.instagram.com/the.jsuniverse?igsh=MTM4bGt0b244bnNtdw==";

    }
