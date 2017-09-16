(function(){
    
    var fragment = document.createDocumentFragment();
    var defineToggleClassButtonCallbacks = document.createElement('script');
    defineToggleClassButtonCallbacks.src = "defineToggleClassButtonCallbacks.js";
    fragment.appendChild(defineToggleClassButtonCallbacks);

    var createClocks = document.createElement('script');
    createClocks.src = "clock/createClocks.js";
    fragment.appendChild(createClocks);

    var createSpinners = document.createElement('script');
    createSpinners.src = "spinner/createSpinners.js";
    fragment.appendChild(createSpinners);

    var createSunCloudSpinners = document.createElement('script');
    createSunCloudSpinners.src = "sun-cloud-spinner/createSunCloudSpinners.js";
    fragment.appendChild(createSunCloudSpinners);

    var createLetters = document.createElement('script');
    createLetters.src = "letter/createLetters.js";
    fragment.appendChild(createLetters);

    var createRollers = document.createElement('script');
    createRollers.src = "roller/createRollers.js";
    fragment.appendChild(createRollers);

    document.body.appendChild(fragment);

    function setStyleCallback(element, styleProperty, value){
        element.style[styleProperty] = value;
    }
})()