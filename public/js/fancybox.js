document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox]", {
        zoom: false,
        dragToClose: false,
        doubleClick: false,
        wheel: false,
        on: {
            "click": function (fancybox, event) {
            event.preventDefault();
            },
            "wheel": function (fancybox, event) {
            event.preventDefault();
            },
            "dblclick": function (fancybox, event) {
            event.preventDefault();
            },
        },
    });
});