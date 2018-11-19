import styles from './slidenav.css';

const slidenav = (()=>{
    const slidenav = document.createElement('div');
    slidenav.classList.add(styles.slidenav);
    slidenav.id = 'slidenav';

    const ul = document.createElement('ul');

    const liArray = [];

    liArray.push('Home');
    liArray.push('Estimates');
    liArray.push('Testimonials');
    liArray.push('Gallery');
    liArray.push('About');

    liArray.map((element) => {
        const aLi = document.createElement('li')
        const aLink = document.createElement('a');
        aLink.id = element;
        aLink.classList.add(element);
        aLink.textContent = element;
        aLink.href = window.location.pathname;
        aLi.appendChild(aLink);
        return aLi;
    }).map((element) => {
        ul.appendChild(element);
    })

    const showSlide = () => {
        if(slidenav.classList.contains(styles.showslide)){
            return slidenav.classList.remove(styles.showslide);
        } else {
            return slidenav.classList.add(styles.showslide);
        }
    }

    slidenav.appendChild(ul);

    const returnSlidenav = () => {
        return slidenav;
    }

    return {
        returnSlidenav: returnSlidenav,
        showSlide: showSlide
    }

})();

export default slidenav;