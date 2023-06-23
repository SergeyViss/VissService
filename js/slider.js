document.addEventListener("DOMContentLoaded", function(event) { 
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = document.querySelector('body').offsetWidth;
    if (widthWind <= 1600 && widthWind  >=1400) {
        /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
        let offset = 0;
        const slider = document.querySelector('.slider-line')
        document.querySelector('.slider-right').addEventListener('click', function(){
            offset -= 780;
        if (offset < -1560){
            offset = 0;
        }
        slider.style.left = offset + 'px';
        });
        
        document.querySelector('.slider-left').addEventListener('click', function(){
            offset += 780;
            if (offset > 0){
                offset = -1560;
            }
            slider.style.left = offset + 'px';
        });
    }
});
document.addEventListener("DOMContentLoaded", function(event) { 
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = document.querySelector('body').offsetWidth;
    if (widthWind <= 1399 && widthWind  >=1280) {
        /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
        let offset = 0;
        const slider = document.querySelector('.slider-line')
        document.querySelector('.slider-right').addEventListener('click', function(){
            offset -= 780;
        if (offset < -1560){
            offset = 0;
        }
        slider.style.left = offset + 'px';
        });
        
        document.querySelector('.slider-left').addEventListener('click', function(){
            offset += 780;
            if (offset > 0){
                offset = -1560;
            }
            slider.style.left = offset + 'px';
        });
    }
});
document.addEventListener("DOMContentLoaded", function(event) { 
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = document.querySelector('body').offsetWidth;
    if (widthWind <= 1279 && widthWind  >=1024) {
        /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
        let offset = 0;
        const slider = document.querySelector('.slider-line')
        document.querySelector('.slider-right').addEventListener('click', function(){
            offset -= 499;
        if (offset < -998){
            offset = 0;
        }
        slider.style.left = offset + 'px';
        });

        document.querySelector('.slider-left').addEventListener('click', function(){
            offset += 499;
            if (offset > 0){
                offset = -998;
            }
            slider.style.left = offset + 'px';
        });
    }
});
document.addEventListener("DOMContentLoaded", function(event) { 
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = document.querySelector('body').offsetWidth;
    if (widthWind <= 1023 && widthWind  >=768) {
        /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
        let offset = 0;
        const slider = document.querySelector('.slider-line')
        document.querySelector('.slider-right').addEventListener('click', function(){
            offset -= 374.4;
        if (offset < -748.8){
            offset = 0;
        }
        slider.style.left = offset + 'px';
        });
        
        document.querySelector('.slider-left').addEventListener('click', function(){
            offset += 374.4;
            if (offset > 0){
                offset = -748.8;
            }
            slider.style.left = offset + 'px';
        });
    }
});
document.addEventListener("DOMContentLoaded", function(event) { 
    /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
    var widthWind = document.querySelector('body').offsetWidth;
    if (widthWind <= 767 && widthWind  >=640) {
        /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
        let offset = 0;
        const slider = document.querySelector('.slider-line')
        document.querySelector('.slider-right').addEventListener('click', function(){
            offset -= 320;
        if (offset < -640){
            offset = 0;
        }
        slider.style.left = offset + 'px';
        });
        
        document.querySelector('.slider-left').addEventListener('click', function(){
            offset += 320;
            if (offset > 0){
                offset = -640;
            }
            slider.style.left = offset + 'px';
        });
    }
});