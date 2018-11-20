import styles from './header.css';

import navigation from '../navigation/navigation';
import navbtn from '../navbtn/navbtn';

import coffeePic from '../../../images/CoffeePic.jpg';

const header = (()=>{
    const body = document.querySelector('body');
    const header = document.createElement('div');
    // header.style.height = body.clientHeight*.1+'px';
    header.id = 'header';
    header.classList.add(styles.header);
    const frag = document.createDocumentFragment();
    const headerlogo = document.createElement('div');
    headerlogo.classList.add(styles.headerlogo);
    headerlogo.classList.add(styles.test);
    headerlogo.style = `backgroundImage: ${coffeePic}`;
    // headerlogo.textContent = 'Logo';
    
    const headerlogolink = document.createElement('a');
    headerlogolink.href = window.location.pathname;
    // headerlogolink.text = 'Logo';

    const invisilogo = document.createElement('a');
    invisilogo.classList.add(styles.invisilogo);
    invisilogo.href = window.location.pathname;


    headerlogo.appendChild(headerlogolink);

    frag.appendChild(headerlogo);
    frag.appendChild(invisilogo);
    frag.appendChild(navigation.returnNavigation());
    frag.appendChild(navbtn.returnNavbtn());

    header.appendChild(frag);

    const returnHeader = () => {
        return header;
    }

    return {
        returnHeader: returnHeader
    }

})();

export default header;