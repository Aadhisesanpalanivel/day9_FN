import Invigilator from "../ContextComponents/Invigilator";
import { createContext } from "react";
export const ThemeProvider=createContext()
const Student = () => {
  return (
    <div>
      <ThemeProvider.Provider value={{sgpa:9.5 , cgpa:6.5}}>
      <h1>this hook is alternative for props drilling</h1>
      <h4>Students are writing their exams.</h4>
      <Invigilator/>
      </ThemeProvider.Provider>
    </div>
  );
};
export default Student;
