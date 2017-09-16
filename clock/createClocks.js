(function(){
    var clocks = document.querySelectorAll("div[data-widget='clock']");
    [].forEach.call(clocks, clock=>{
        
        clock.classList.add("clock");
        
        var fragment = document.createDocumentFragment();
        
        var clockBackground = document.createElement("div");
        clockBackground.classList.add("clockBackground");
        
        var clockface = document.createElement("div");
        clockface.classList.add("clockFace");

        var ticker = document.createElement("div");
        ticker.classList.add("ticker");
        

        clockBackground.appendChild(ticker);
        fragment.appendChild(clockBackground);
        fragment.appendChild(clockface);
        clock.appendChild(fragment);
    })
})()