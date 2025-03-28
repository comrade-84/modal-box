// 'use strict';
const modalBtnOpen = document.querySelectorAll('.show-modal');
const modalBtnClose = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');

 
const showModal = function(){
     modalContent.classList.remove('hidden');
     overLay.classList.remove('hidden');

    }  ;
    const closeModal = function(){
        modalContent.classList.add('hidden');
        overLay.classList.add('hidden'); 
    } ;
    
    for (let i = 0; i < modalBtnOpen.length; i++) {
     modalBtnOpen[i].addEventListener('click', showModal);
}   

 modalBtnClose.addEventListener('click', closeModal);


 document.addEventListener('keydown',function(x){
    if(x.key === 'Escape'){
        if(showModal){
            closeModal();
        }
        
    }
 })
 