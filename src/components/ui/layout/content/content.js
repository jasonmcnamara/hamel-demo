import styles from './content.css';

import slogan from '../../slogan/slogan';
import grid from '../../grid/grid';

const content = (()=>{
    const content = document.createElement('div');
    content.classList.add(styles.content);
    content.id = 'content';

    content.appendChild(slogan.returnSlogan());
    content.appendChild(grid.returnGrid());

    const returnContent = () => {
        return content;
    }

    return {
        returnContent: returnContent
    }
})();

export default content;