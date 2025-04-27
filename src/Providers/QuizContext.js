import { createContext } from "react";
import { quiz_list } from "../Assets/Index";

export const QuizContext = createContext();

const QuizContextProvider = (props) => {
    const contextValue = {
        quiz_list
    };

    return (
        <QuizContext.Provider value={contextValue}>
            {props.children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
