document.addEventListener("DOMContentLoaded", () => {
    console.log("Profil Alejandro Balde berhasil dimuat.");

    // Animasi sederhana saat halaman muncul
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.opacity = 0;
    profileCard.style.transform = "translateY(20px)";

    setTimeout(() => {
        profileCard.style.transition = "all 0.8s ease";
        profileCard.style.opacity = 1;
        profileCard.style.transform = "translateY(0)";
    }, 100);
});
