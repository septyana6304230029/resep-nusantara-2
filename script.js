function showRecipe(food) {

    let recipe = "";

    switch (food) {

        case "rendang":
            recipe =
            "🍛 RENDANG DAGING SAPI\n\n" +
            "⏱️ Waktu: ±1 Jam 30 Menit\n\n" +

            "Bahan:\n" +
            "- 450 gr daging sapi\n" +
            "- 1 batang serai\n" +
            "- 2 lembar daun salam\n" +
            "- 1 sdm bumbu instan rendang\n" +
            "- Kecap manis secukupnya\n" +
            "- Air secukupnya\n" +
            "- 1/2 sdt merica bubuk\n" +
            "- 1/2 sdt kaldu bubuk\n" +
            "- 1/2 sdt penyedap\n\n" +

            "Bumbu Halus:\n" +
            "- 12 cabai merah\n" +
            "- 8 kemiri\n" +
            "- Jahe, kunyit, lengkuas\n" +
            "- 2 bawang putih\n" +
            "- 3 bawang merah\n" +
            "- Garam\n\n" +

            "Cara Membuat:\n" +
            "1. Potong dan cuci daging.\n" +
            "2. Tumis bumbu halus, serai, dan daun salam.\n" +
            "3. Masukkan daging hingga berubah warna.\n" +
            "4. Tambahkan air dan kecap manis.\n" +
            "5. Masukkan bumbu lainnya, masak hingga kuah menyusut dan daging empuk.\n" +
            "6. Sajikan.";
            break;

        case "pempek":
            recipe =
            "🥟 PEMPEK DOS KAPAL SELAM\n\n" +

            "Bahan Adonan:\n" +
            "- 125 gr tepung terigu\n" +
            "- 25 gr tepung beras\n" +
            "- 300-400 gr sagu/tapioka\n" +
            "- 1 butir telur\n" +
            "- 500 ml air\n" +
            "- Bawang putih, garam, kaldu bubuk, minyak\n\n" +

            "Bahan Cuko:\n" +
            "- Air\n" +
            "- Gula aren\n" +
            "- Gula pasir\n" +
            "- Asam jawa\n" +
            "- Bawang putih\n" +
            "- Cabai rawit\n" +
            "- Garam\n\n" +

            "Cara Membuat:\n" +
            "1. Campur terigu, tepung beras, bawang putih, kaldu dan minyak.\n" +
            "2. Tambahkan air lalu masak hingga mengental.\n" +
            "3. Dinginkan lalu masukkan telur.\n" +
            "4. Tambahkan sagu sedikit demi sedikit.\n" +
            "5. Bentuk adonan.\n" +
            "6. Rebus hingga mengapung.\n" +
            "7. Tiriskan.\n" +
            "8. Goreng hingga matang.\n" +
            "9. Sajikan bersama cuko.";
            break;

        case "sate":
            recipe =
            "🍢 SATE AYAM MADURA\n\n" +

            "Bahan:\n" +
            "- 250 gr dada ayam fillet\n" +
            "- Jeruk nipis\n" +
            "- Garam\n" +
            "- Lada\n" +
            "- Bawang putih bubuk\n\n" +

            "Bumbu Kacang:\n" +
            "- 100 gr kacang tanah\n" +
            "- Bawang merah\n" +
            "- Bawang putih\n" +
            "- Cabe merah\n" +
            "- Kemiri\n" +
            "- Daun jeruk\n" +
            "- Kecap manis\n\n" +

            "Cara Membuat:\n" +
            "1. Potong ayam lalu lumuri jeruk nipis.\n" +
            "2. Marinasi ayam dengan garam, lada dan bawang putih.\n" +
            "3. Goreng kacang dan bumbu.\n" +
            "4. Blender hingga halus.\n" +
            "5. Masak bumbu kacang sampai matang.\n" +
            "6. Lumuri sate dengan bumbu.\n" +
            "7. Panggang hingga matang.\n" +
            "8. Sajikan dengan bumbu kacang.";
            break;

        case "mieaceh":
            recipe =
            "🍜 MIE ACEH\n\n" +

            "Bahan:\n" +
            "- 200 gr mie kuning\n" +
            "- 75 gr daging sapi\n" +
            "- Bawang merah\n" +
            "- Bawang putih\n" +
            "- Tomat\n" +
            "- Taoge\n" +
            "- Daun bawang\n" +
            "- Kecap manis\n" +
            "- Royco Kaldu Sapi\n\n" +

            "Bumbu Halus:\n" +
            "- Bawang merah\n" +
            "- Bawang putih\n" +
            "- Cabai merah\n" +
            "- Kapulaga\n" +
            "- Kunyit\n" +
            "- Jintan\n" +
            "- Lada\n\n" +

            "Cara Membuat:\n" +
            "1. Haluskan semua bumbu.\n" +
            "2. Tumis bawang dan bumbu hingga harum.\n" +
            "3. Masukkan daging hingga matang.\n" +
            "4. Tambahkan tomat dan taoge.\n" +
            "5. Masukkan garam, kecap, kaldu, gula dan cuka.\n" +
            "6. Masukkan mie lalu aduk rata.\n" +
            "7. Taburi daun bawang.\n" +
            "8. Sajikan dengan acar dan bawang goreng.";
            break;

        default:
            recipe = "Resep tidak ditemukan.";
    }

    document.getElementById("recipeText").textContent = recipe;
    document.getElementById("recipeModal").style.display = "block";
}