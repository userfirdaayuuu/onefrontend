import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from './Pages/Users/Login';
import Registration from './Pages/Users/Registration';
import About from './Components/Common/About/About';
import CourseContent from '../src/Components/Siswa/CourseContent/CourseContent';
import CourseDetail from '../src/Components/Siswa/CourseDetail/CourseDetail';
import CourseDisplay from '../src/Components/Siswa/CourseDisplay/CourseDisplay';
import EditCourse from './Components/Admin/AdminCourseEdit/EditCourse';
import CourseMaterial from './Components/Siswa/CourseMaterial/CourseMaterial';
import RoleSelection from './Components/Common/RoleSelection/RoleSelection';
import TutorFormUploadMateri from './Components/Tutor/TutorFormUploadMateri/TutorFormUploadMateri';
import TutorCourseDisplay from './Components/Tutor/TutorCourseDisplay/TutorCourseDisplay';
import CourseCard from './Components/Siswa/CourseCard/CourseCard';
import TutorDashboard from './Pages/TutorDashboard/TutorDashboard';
import DashboardSiswa from './Pages/SiswaDashboard/SiswaDashboard';
import LandingPage from './Components/Common/Landing/LandingPage';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import MyAccount from './Components/Common/Profile/MyAccount';
import TutorCourseMaterial from './Components/Tutor/TutorCourseMaterial/TutorCourseMaterial';

const App = () => {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard/siswa' element={<DashboardSiswa />} />
        <Route path='/role-selection' element={<RoleSelection />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register/:role' element={<Registration/>}/>
        <Route path='/about' element={<About />}/>

        {/* profile */}
        <Route path='/profile' element={<MyAccount />} />
        
        {/* alur siswa kursus - materi */}
        <Route path='/course-material' element={<CourseMaterial />} />
        <Route path='/course-material/:id' element={<CourseDisplay />}/>
        <Route path='/course-material/:courseId/:materiId' element={<CourseContent />}/>

        {/* alur siswa kursus - informasi kursus */}
        <Route path='/course-card' element={<CourseCard />}/>
        <Route path='/course/:id' element={<CourseDetail />}/>
        
        {/* tutor upload materi */}
        <Route path='/dashboard/tutor' element={<TutorDashboard/>} />
        <Route path='/tutor-course-material' element={<TutorCourseMaterial />} />
        <Route path='/tutor-course-material/:id' element={<TutorCourseDisplay />} />
        <Route path='/tutor-course/:id/upload' element={< TutorFormUploadMateri/>} />

        {/* admin edit informasi kursus */}
        <Route path='/dashboard/admin' element={<AdminDashboard />} />
        <Route path='/courseadmin/edit/:id' element={<EditCourse />} />


      </Routes>
    </div>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
