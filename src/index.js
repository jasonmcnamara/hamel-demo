import './index.css';

import appwrap from './components/ui/appwrap/appwrap';
// import motto from '../src/components/ui/motto/motto';
import header from './components/ui/header/header';
import slidenav from './components/ui/slidenav/slidenav';
import content from './components/ui/layout/content/content';

document.addEventListener("DOMContentLoaded", function(event) {

    // window.addEventListener('resize', motto.vhTest);

    const appwrapper = appwrap.appWrap();

    // appwrapper.appendChild(motto.returnMotto());

    appwrapper.appendChild(header.returnHeader());

    appwrapper.appendChild(slidenav.returnSlidenav());

    appwrapper.appendChild(content.returnContent());

    console.log(__dirname);

});