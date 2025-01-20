import { useState, createContext } from "react";
const mycontext = createContext();
const ColorContext = ({ children }) => {
    const [color, setColor] = useState("red");
    return (
        <>
            <mycontext.Provider value={{ color, setColor }}>
                {children}
            </mycontext.Provider>
        </>
    )
}
export default ColorContext;
export { mycontext };