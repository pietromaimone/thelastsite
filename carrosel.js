document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".carousel-videos iframe");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;

    function showVideo(index) {
        videos.forEach((video, i) => {
            video.classList.remove("active");
            // Para o vídeo atual reiniciar quando sair
            const src = video.src;
            video.src = "";
            video.src = src;
        });
        videos[index].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        showVideo(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % videos.length;
        showVideo(currentIndex);
    });

    showVideo(currentIndex);
});
