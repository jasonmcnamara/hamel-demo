import styles from './slogan.css';

const slogan = (()=>{
    const slogan = document.createElement('div');
    slogan.classList.add(styles.slogan);

    slogan.innerHTML = `
        <h1>Specializing In:</h1>
        <p>Project Estimating & Management - Vendor & Material Procurement - General Contracting
        Environmental Branding & Placemaking - Graphic Design - Marketing Materials & Signage
        Web Design & Development - Renovation & Construction Services - Permit Procurement
        Proposal Writing - Product Reserach - Client Representation - Consulting</p>
    `

    const returnSlogan = () => {
        return slogan;
    }

    return {
        returnSlogan: returnSlogan
    }
})();

export default slogan;