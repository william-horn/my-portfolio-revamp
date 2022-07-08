
import React, { createContext, useContext } from 'react';

const ButtonListContext = createContext();
export const useButtonListContext = () => useContext(ButtonListContext);

export const ButtonList = ({ children }) => {
    const prevSelected = children.find(child => child.props.value === "home");

    return (
        <ButtonListContext.Provider value={prevSelected}>
            {children}
        </ButtonListContext.Provider>
    );
}

