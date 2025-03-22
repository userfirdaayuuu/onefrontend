import { createContext } from "react";
import { tutor_course} from "../Assets/Index";
export const TutorContext = createContext();

const TutorContextProvider = (props) => {
    const contextValue = {
        tutor_course
    }
    
    return (
        <TutorContext.Provider value={contextValue}>
            {props.children}
        </TutorContext.Provider>
    )
};

export default TutorContextProvider;