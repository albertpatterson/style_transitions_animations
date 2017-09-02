(function(){
    var clocks = document.querySelectorAll("div[data-widget='clock']");
    [].forEach.call(clocks, clock=>{
        var fragment = document.createDocumentFragment();
        var clockface = document.createElement("div");
        clockface.classList.add("clockFace");
        var ticker = document.createElement("div");
        ticker.classList.add("ticker");
        clockface.appendChild(ticker);
        fragment.appendChild(clockface);
        clock.appendChild(fragment);
    })
})()