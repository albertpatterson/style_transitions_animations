(function(){
    var letterParents = document.querySelectorAll("div[data-widget='moving-closing-letter']");
    [].forEach.call(letterParents, function(letterParent){
        var fragment = document.createDocumentFragment();
        
        var cont = document.createElement("div");
        cont.classList.add("letterContainer");
        fragment.appendChild(cont);

        var foldCont = document.createElement("div");
        foldCont.classList.add("foldContainer");
        cont.appendChild(foldCont);
        
        var letterFold = document.createElement("div");
        letterFold.classList.add("letterFold");
        foldCont.appendChild(letterFold);

        var letterBody = document.createElement("div");
        letterBody.classList.add("letterBody");
        cont.appendChild(letterBody);

        letterParent.appendChild(fragment);
    })
})()