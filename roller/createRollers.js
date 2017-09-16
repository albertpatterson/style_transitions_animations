(function(){
    var rollerParents = document.querySelectorAll("div[data-widget='roller']");
    [].forEach.call(rollerParents, function(rollerParent){

        var fragment = document.createDocumentFragment();
        
        var cont = document.createElement("div");
        cont.id = rollerParent.id;
        cont.classList.add("rollerContainer");
        fragment.appendChild(cont);

        var outerRoller = document.createElement("div");
        outerRoller.classList.add("outerRoller");
        cont.appendChild(outerRoller);

        var roller = document.createElement("div");
        roller.classList.add("innerRoller")
        outerRoller.appendChild(roller);

        rollerParent.parentElement.replaceChild(fragment, rollerParent);
    })
})()