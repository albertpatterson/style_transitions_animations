(function(){
    var spinnerParents = document.querySelectorAll("div[data-widget='sun-cloud-spinner']");
    [].forEach.call(spinnerParents, function(spinnerParent){
        var fragment = document.createDocumentFragment();
        
        var spinnerCont = document.createElement("div");
        spinnerCont.id = spinnerParent.id;
        spinnerCont.classList.add("sun-cloud-spinner");
        fragment.appendChild(spinnerCont);

        var skyRotor = document.createElement("div");
        skyRotor.classList.add("skyRotor");
        spinnerCont.appendChild(skyRotor);

        var sun = document.createElement("div");
        sun.classList.add("sun");
        skyRotor.appendChild(sun);

        var cloud = document.createElement("cloud");
        cloud.classList.add("cloud")
        skyRotor.appendChild(cloud);

        document.body.replaceChild(fragment, spinnerParent)
    })
})()