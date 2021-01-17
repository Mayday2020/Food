'use strict';
window.addEventListener('DOMContentLoaded', ()=> {
    const tabs = document.querySelectorAll('.tabheader__item'), // Табы 
        tabsContent = document.querySelectorAll('.tabcontent'), // Контент табов слева
        tabsParent = document.querySelector('.tabheader__items');   // Родитель табов

        function hideTabContent () {
            tabsContent.forEach( item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
                //item.style.display = 'none';
            });
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        function showTabContent (i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            //tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event)=>{
            const target = event.target;
            if (target && target.classList.contains('tabheader__item')){
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });


});