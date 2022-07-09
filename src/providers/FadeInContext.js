
import React, { createContext, useContext, useState } from 'react';

const FadeInContext = createContext();
export const useFadeInContext = () => useContext(FadeInContext);

export const FadeIn = ({ children, watchState }) => {
    return (
        <FadeInContext.Provider value={watchState}>
            {children}
        </FadeInContext.Provider>
    )
}
