window.onload = function() {
    for (let i = 0; i < 30; i++) {
        let spark = document.createElement("div");
        spark.style.position = "fixed";
        spark.style.left = Math.random() * window.innerWidth + "px";
        spark.style.top = Math.random() * window.innerHeight + "px";
        spark.style.width = "12px";
        spark.style.height = "12px";
        spark.style.backgroundColor = "sunset";
        spark.style.borderRadius = "50%";
        spark.style.boxShadow = "0 0 10px gold, 0 0 20px orange";
        spark.style.zIndex = "9999";
        spark.style.pointerEvents = "none";
        spark.style.transition = "all 7s ease-out";
        document.body.appendChild(spark);

        setTimeout(function() {
            spark.style.transform = "translateY(-60px) scale(1.8)";
            spark.style.opacity = "0";
        }, 100);

        setTimeout(function() {
            spark.remove();
        }, 2000);
    }
};