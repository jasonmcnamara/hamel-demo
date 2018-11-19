import styles from './motto.css';

const motto = (() => {

    const tester = () => {
        console.log('tester');
    }

    const vhTest = () => {
        const body = document.querySelector('body');
        console.log(body.clientHeight);
        console.log(body.clientWidth);
        console.log('hello');
    }

    const motto = document.createElement('div');
    motto.className += styles.motto;
    motto.className += ' '+styles.appwrapper;
    motto.innerHTML = `<p>Go <span>hard</span> or go home!!!</p>`;

    motto.addEventListener('click', tester);

    const returnMotto = () => {
        return motto;
    }

    return {
        returnMotto: returnMotto,
        vhTest: vhTest
    }
})();

export default motto;