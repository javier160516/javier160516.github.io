document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#sandwich").addEventListener("click", () => {
        document.querySelector("body").classList.toggle("visible_menu");
    });
});