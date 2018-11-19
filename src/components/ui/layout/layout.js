const layout = (()=>{
    const resizeHandler = () => {
        window.addEventListener('resize', () => {
            const body = document.querySelector('body');
            const header = document.querySelector('#header');
            header.style.height = body.clientHeight*.1+'px';
        })
    }

    return {
        resizeHandler: resizeHandler
    }
})();

export default layout;