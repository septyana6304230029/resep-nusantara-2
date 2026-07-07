function showRecipe(food) {

    let recipe = "";

    switch (food) {

        case "rendang":
            recipe =
            "🍛 RENDANG\n\n" +
            "Bahan:\n" +
            "- 500 gram daging sapi\n" +
            "- Santan\n" +
            "- Cabai\n" +
            "- Bawang merah\n" +
            "- Bawang putih\n\n" +
            "Cara Memasak:\n" +
            "Masak semua bahan hingga kuah mengering dan bumbu meresap.";
            break;

        case "pempek":
            recipe =
            "🥟 PEMPEK\n\n" +
            "Bahan:\n" +
            "- Ikan tenggiri\n" +
            "- Tepung sagu\n" +
            "- Telur\n\n" +
            "Cara Memasak:\n" +
            "Campurkan bahan, bentuk adonan, lalu rebus hingga matang.";
            break;

        case "sate":
            recipe =
            "🍢 SATE MADURA\n\n" +
            "Bahan:\n" +
            "- Daging ayam\n" +
            "- Bumbu kacang\n" +
            "- Kecap manis\n\n" +
            "Cara Memasak:\n" +
            "Tusuk daging, bakar hingga matang, lalu sajikan dengan bumbu kacang.";
            break;

        case "mieaceh":
            recipe =
            "🍜 MIE ACEH\n\n" +
            "Bahan:\n" +
            "- Mi kuning\n" +
            "- Daging sapi\n" +
            "- Cabai\n" +
            "- Bawang\n\n" +
            "Cara Memasak:\n" +
            "Tumis bumbu, masukkan daging dan mi, lalu aduk hingga matang.";
            break;

        case "sempolet":
            recipe =
            "🍲 SEMPOLET\n\n" +
            "Bahan:\n" +
            "- Siput Sedut\n" +
            "- Tepung Sagu\n" +
            "Cara Memasak:\n" +
            "Campurkan semuanya.";
            break;
        default:
            recipe = "Resep tidak ditemukan.";
    }

    alert(recipe);
}