import styles from './navigation.css';

const navigation = (()=>{
    const navigation = document.createElement('div');
    navigation.id = 'navigation';
    navigation.classList.add(styles.navigation);

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

    // const linklist = liArray.map((element) => {
    //     const aLi = document.createElement('li')
    //     const aLink = document.createElement('a');
    //     aLink.id = element;
    //     aLink.classList.add(element);
    //     aLink.textContent = element;
    //     aLi.appendChild(aLink);
    //     return aLi;
    // });

    // linklist.forEach((element) => {
    //     ul.appendChild(element);
    // });

    navigation.appendChild(ul);

    const returnNavigation = () => {
        return navigation;
    }

    return {
        returnNavigation: returnNavigation
    }
    
})();

export default navigation;