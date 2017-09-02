(function(){
    var spinnerParents = document.querySelectorAll("div[data-widget='sun-cloud-spinner']");
    [].forEach.call(spinnerParents, function(spinnerParent){
        var fragment = document.createDocumentFragment();
        
        var sky = document.createElement("div");
        sky.classList.add("sky");
        fragment.appendChild(sky);

        var skyRotor = document.createElement("div");
        skyRotor.classList.add("skyRotor");
        sky.appendChild(skyRotor);

        var sun = document.createElement("div");
        sun.classList.add("sun");
        skyRotor.appendChild(sun);

        var cloud = document.createElement("cloud");
        cloud.classList.add("cloud")
        skyRotor.appendChild(cloud);

        spinnerParent.appendChild(fragment);
    })
})()