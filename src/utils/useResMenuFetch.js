import { useEffect, useState } from 'react';
import { MENU_URL } from "../utils/constants";

const useResMenuFetch = (resid)=>{

    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetchMenu();
      }, []);

    const fetchMenu = async () => {
        const menuinfo = await fetch(MENU_URL + resid );
        const json = await menuinfo.json();
        setMenu(json.data);
      };

    return menu;
}
export default useResMenuFetch;