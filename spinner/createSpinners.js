(function(){
    var spinnerParents = document.querySelectorAll("div[data-widget='spinner']");
    [].forEach.call(spinnerParents, function(spinnerParent){

        var fragment = document.createDocumentFragment();
        
        var cont = document.createElement("div");
        cont.id = spinnerParent.id;
        cont.classList.add("spinCont");
        fragment.appendChild(cont);

        var hub = document.createElement("div");
        hub.classList.add("spinHub");
        cont.appendChild(hub);

        var spinner = document.createElement("div");
        spinner.classList.add("spinner")
        hub.appendChild(spinner);

        var spinnerClipper = document.createElement("div");
        spinnerClipper.classList.add("spinnerClipper")
        hub.appendChild(spinnerClipper);

        spinnerParent.parentElement.replaceChild(fragment, spinnerParent);
    })
})()