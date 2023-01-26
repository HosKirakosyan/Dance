
    const menu_btn = document.getElementById('header_burger')
    const header_menu = document.getElementById('menu')
    const burger_background = document.getElementById('burger_background')
    

    document.onclick = function(e){
        if(e.target.id !== 'header_burger' && e.target.id !== 'menu'){
            menu_btn.classList.remove('is-active');
            header_menu.classList.remove('is-active');
            burger_background.classList.remove('is-active');
        };
    };

    menu_btn.onclick = function(){
        menu_btn.classList.toggle('is-active');
        header_menu.classList.toggle('is-active');
        burger_background.classList.toggle('is-active');
        
    };
