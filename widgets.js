(function(){
    
    var fragment = document.createDocumentFragment();
    var defineToggleClassButtonCallbacks = document.createElement('script');
    defineToggleClassButtonCallbacks.src = "defineToggleClassButtonCallbacks.js";
    fragment.appendChild(defineToggleClassButtonCallbacks);

    var createClocks = document.createElement('script');
    createClocks.src = "createClocks.js";
    fragment.appendChild(createClocks);

    var createSpinners = document.createElement('script');
    createSpinners.src = "createSpinners.js";
    fragment.appendChild(createSpinners);

    var createSunCloudSpinners = document.createElement('script');
    createSunCloudSpinners.src = "createSunCloudSpinners.js";
    fragment.appendChild(createSunCloudSpinners);

    var createLetters = document.createElement('script');
    createLetters.src = "createLetters.js";
    fragment.appendChild(createLetters);

    document.body.appendChild(fragment);

    function setStyleCallback(element, styleProperty, value){
        element.style[styleProperty] = value;
    }


})()