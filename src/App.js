import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Users/Login';
import Registration from './Pages/Users/Registration';
import About from './Components/About/About';
// import CourseDetail from './Components/CourseDetail/CourseDetail';
import CourseContent from '../src/Components/Siswa/CourseContent/CourseContent';
import Quiz from '../src/Components/Siswa/Quiz/Quiz';
import QuizDisplay from '../src/Components/Siswa/QuizDisplay/QuizDisplay';
import QuizContent from './Components/Siswa/QuizContent/QuizContent';
import PageCourse from './Pages/Course/PageCourse';
import CourseDetail from '../src/Components/Siswa/CourseDetail/CourseDetail';
// import NavSidebar from './Pages/NavSidebar/NavSidebar';
import CourseDisplay from '../src/Components/Siswa/CourseDisplay/CourseDisplay';
import CalendarPages from './Pages/Calendar/CalendarPages';
import AdminCourseDetail from '../src/Components/Admin/AdminCourseDetail/AdminCourseDetail';
import TutorCourseDisplay from './Components/Tutor/TutorCourseDisplay/TutorCourseDisplay';
import TutorUnggah from './Components/Tutor/TutorUnggah/TutorUnggah';
import UICardBaru from './Components/UIGrid/UICardbaru';
import Profile from './Components/User/Profile';
import CreateQuiz from './Components/Tutor/TutorQuiz/CreateQuiz'; 
import TakeQuiz from './Components/Tutor/TutorQuiz/TakeQuiz';
import EditCourse from './Components/Admin/AdminCourseDetail/EditCourse';

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
        <Route path='/quiz/:quiz_name' element={<QuizDisplay />}/>
        <Route path='/quiz/:quiz_name/:id' element={<QuizContent />}/>
        <Route path='/course' element={<PageCourse />}/>
        <Route path='/course/:course_name' element={<CourseDetail />}/>
        <Route path='/course/:course_name/materials' element={<CourseDisplay />}/>
        <Route path='/course/:course_name/materials/:id' element={<CourseContent />}/>
        <Route path='/calendar' element={<CalendarPages />}/>
        <Route path='/admininformasikursus' element={<AdminCourseDetail />}/>
        <Route path='/tutorunggah' element={<TutorUnggah />}/>
        <Route path='/uigrid' element={<UICardBaru />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/buatquiz' element={<CreateQuiz />} />
        <Route path='/takequiz' element={<TakeQuiz />} />
        <Route path='/editcourse' element={<EditCourse />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
