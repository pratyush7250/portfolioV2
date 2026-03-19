import { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = ""

    const contextValue = {
        
        url,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
