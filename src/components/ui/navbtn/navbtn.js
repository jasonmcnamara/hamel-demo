import styles from './navbtn.css';

import slidenav from '../slidenav/slidenav';

const navbtn = (()=>{
    const navbtn = document.createElement('div');
    navbtn.classList.add(styles.navbtn);

    navbtn.innerHTML = '&#8801';

    navbtn.addEventListener('click', slidenav.showSlide);
        // const slidenav = document.querySelector('#slidenav');
        // if(slidenav.classList.contains(styles.showslide)){
        //     slidenav.classList.remove(styles.showslide);
        // } else {
        //     slidenav.classList.add(styles.showslide);
        // }
    // })

    const returnNavbtn = () => {
        return navbtn;
    }

    return {
        returnNavbtn: returnNavbtn
    }

})();

export default navbtn;