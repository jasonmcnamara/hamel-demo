import styles from './grid.css';

const grid = (()=>{
    const grid = document.createElement('div');
    grid.classList.add(styles.grid);

    for(let i = 0; i < 10; i++)
    {
        const gridchild = document.createElement('div');
        gridchild.classList.add('gridchild-'+i);
        gridchild.textContent = 'Child: '+(i+1);
        grid.appendChild(gridchild);
    }
    
    const returnGrid = () => {
        return grid;
    }

    return {
        returnGrid: returnGrid
    }
})();

export default grid;