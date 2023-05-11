import React, {useState} from 'react';

const HidableContext = React.createContext();

export const HidableProvider = ({children}) => {

    const [hidden, setIsHidden] = useState(true)

    return <HidableContext.Provider value={{isHidden: hidden, setIsHidden}}>
        {children}
    </HidableContext.Provider>;
}

export default HidableContext;