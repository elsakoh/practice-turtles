import { useEffect, useState } from 'react';

const ScrollToTop = () => {

    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            window.scrollTo(0, 0);
        }
    }, []);

    return null;
}
export default ScrollToTop;