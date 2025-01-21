
const throttleFunction = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now;
            func(...args);
        }
    };
};

document.querySelector("#center").addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        // Create a dynamic div for styling purposes
        const outerDiv = document.createElement("div");
        outerDiv.style.width = "220px";
        outerDiv.style.height = "120px";
        outerDiv.style.overflow = "hidden";
        outerDiv.style.position = "absolute";
        outerDiv.style.left = dets.clientX + "px";
        outerDiv.style.top = dets.clientY + "px";

        // Create an image element
        const img = document.createElement("img");
        img.setAttribute(
            "src",
            "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg"
        );
        img.style.width = "100%"; // Fit the image inside the div
        img.style.height = "auto"; // Maintain aspect ratio

        // Append the image to the div
        outerDiv.appendChild(img);

        // Add the div to the body
        document.body.appendChild(outerDiv);

        // Remove the div after 2 seconds
        setTimeout(() => {
            outerDiv.remove();
        }, 2000);
    }, 400)
);








