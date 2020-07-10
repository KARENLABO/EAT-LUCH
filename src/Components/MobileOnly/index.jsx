import { useState, useEffect } from 'react';

const isWindowMobile = () => window.innerWidth <= 768;

function MobileOnly({ children }) {
    // Iniciamos el state con el valor actual de window.innerWidth
    const [isMobile, setIsMobile] = useState(isWindowMobile);

    // adjuntamos un listener al evento resize de window
    useEffect(() => {
        const resizeHandler = () => {
            setIsMobile(isWindowMobile())
        };
        window.addEventListener('resize', resizeHandler);

        // nos encargamos de quitar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [])

    if (!isMobile) {
        // si no es mobile, no se pinta nada
        return null;
    }

    // si es mobile se pinta todo lo que venga dentro del body del componente
    return children
}

export default MobileOnly