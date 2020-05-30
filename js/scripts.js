(function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('toggleMenu');
    const toggleBurgerClass = 'header__menu--active';

    const tooltip = document.getElementById('tooltipBtn');
    const tooltipMenu = document.getElementById('tooltipMenu');
    const toggleTooltipClass = 'cart__tooltip--active';
   
  
    const toggleMenu = ( menu, toggleClass) => {
      menu.classList.toggle(toggleClass);
    }
  
    const clickOutside = (event, menu, toggleClass, btn) => {
      let target = event.target;
      let its_menu = target == menu || menu.contains(target);
      let menu_is_active = menu.classList.contains(toggleClass);
      let its_btn = target == btn;
      if (!its_menu && !its_btn && menu_is_active) {
        menu.classList.remove(toggleClass);
      }
    }
    
    tooltip.addEventListener('click',() => toggleMenu(tooltipMenu, toggleTooltipClass));
    document.addEventListener('click', () => clickOutside(event, tooltipMenu, toggleTooltipClass, tooltip));

    burger.addEventListener('click',() => toggleMenu(menu, toggleBurgerClass));
    document.addEventListener('click', () => clickOutside(event, menu, toggleBurgerClass, burger));
   

  })();