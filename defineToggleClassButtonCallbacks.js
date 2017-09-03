(function(){
    toggleClassButtons = document.querySelectorAll('button[data-toggle="class"]');
    [].forEach.call(toggleClassButtons, button =>{
        let className = button.dataset.class;
        button.onclick = ()=> {
            let target = document.getElementById(button.dataset.target).firstElementChild;            
            toggleClass(target, className)
        };
    })

    function toggleClass(element, className){
        element.classList.toggle(className);
    }
})()