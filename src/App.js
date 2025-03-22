import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Users/Login';
import Registration from './Pages/Users/Registration';
import About from './Components/About/About';
// import CourseDetail from './Components/CourseDetail/CourseDetail';
import CourseContent from './Components/CourseContent/CourseContent';
import Quiz from './Components/Quiz/Quiz';
import FormCourse from './Components/Form/Form';
// import Material from './Components/Material/Material';
// import CourseDisplay from './Components/CourseDisplay/CourseDisplay';
import PageCourse from './Pages/Course/PageCourse';

const App = () => {
  return (
    <>
    <div className="App">
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/daftar' element={<FormCourse />}/>
        <Route path='/course/:id' element={<CourseContent />}/>
        <Route path='/course' element={<PageCourse />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
