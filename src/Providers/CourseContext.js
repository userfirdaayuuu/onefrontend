import { createContext } from "react";
import { course_list } from "../Assets/Index";
export const CourseContext = createContext();

const CourseContextProvider = (props) => {
    const contextValue = {
        course_list
    }
    
    return (
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
};

export default CourseContextProvider;