import style from './appwrap.css';

const appwrap = (()=>{

    const body = document.querySelector('body');

    const appwrapper = document.createElement('div');
    appwrapper.className += style.appwrapper;


    const appWrap = () => {
        
        body.appendChild(appwrapper);
        return appwrapper;
        
    }

    return {
        appWrap: appWrap
    }
})();

export default appwrap;