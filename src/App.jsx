import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Compo/Hero';
import Mission from './Compo/Mission';
import TreeCol from './Compo/Treecol';
import Whywe from './Compo/Whywe';
import Topper from './Compo/Topper';
import Footer from './Compo/Footer';
import Applynow from './Compo/Applynow';
import Statics from './Compo/Statics';
import Navbar from './Compo/Navbar';
import Gallery from './Compo/Gallery';
import Teachers from './Compo/Teachers';
import Achivements from './Compo/Achivements'
import Students from './Compo/Students';
import Pricipaldesk from './Compo/Pricipaldesk';
import Trustee from './Compo/Trustee';
import Helphand from './Compo/Helphand';
import Student from './Compo/Student';
import Enquiry from './Compo/Enquiry';
import Sciencelab from './Compo/Scienceslab';
import Computerlab from './Compo/Computerla';
import Library from './Compo/Library';
import Smartclass from './Compo/Smartclass';
import Playarea from './Compo/Playarea';
import Rta from './Compo/Rta';
import Bus from './Compo/Bus';
import Selection from './Compo/Selection';
import Otherdetail from './Compo/Otherdetail';
import StudentInfoForm from './Compo/StudentInfoForm';
import AddInfo from './Compo/AddInfo';

import Detailsother from './Compo/Detailsother';
import Fatherinfo from './Compo/Fatherinfo';
import Motherinfo from './Compo/Motherinfo';
import Healthdetail from './Compo/Healthdetail';
import Sucess from './Compo/Sucess';
import Log from './Compo/Log';
import Toppers from './Compo/Toppers';
import Ssc from './Compo/Toppers';
import StudentCouncil from './Compo/StudentCouncil';
import SchoolManagementSoftware from './Compo/SchoolManagementSoftware';
import Ncc from './Compo/Ncc';
import AlumniStudents from './Compo/AlumniStudents';
import AlumniForm from './Compo/AlumniForm';
import NTSE from './Compo/NTSE';
import StdX from './Compo/StdX';
import Scholor from './Compo/Scholor';
import AboutUs from './Compo/Aboutus';
import Facilities from './Compo/Facilities';
import AcademicsSection from './Compo/Acadmic';
import MTSE from './Compo/MTSE';
import StudentStats from './Compo/Studentsate';
import ParentTeachersAssociation from './Compo/ParentTeachersAssociation';
import OfficeTimeing from './Compo/OfficeTimeing';
import AlumniAbout from './Compo/AlumniAbout';
import AlumniEnroll from './Compo/AlumniEnroll';
import AboutHero from './Compo/AboutHero';
import Admissions from './Compo/Admisions';












function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
  {/* shantanu */}
       
<Route path="/faculty" element={<Teachers />} />
        
        {/* <Footer></Footer> */}
  {/* shantanu */}
        <Route path="/ACHIEVEMENTS" element={<Achivements />} />
        {/* ritesh */}
        <Route path="/GALLERY" element={<Gallery />} />
        <Route path="/STUDENTS" element={<Students />} />
        {/* ritesh */}

{/* ashish */}
{/* nav , about  */}
{/* ashish */}

        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/Pricipaldesk" element={<Pricipaldesk />} />
        <Route path="/about/Trustee" element={<Trustee />} />
        <Route path="/about/StudentTimings" element={<Student />} />
        <Route path="/about/OfficeTimeing" element={<OfficeTimeing />} />
        <Route path="/about/Helphand" element={<Helphand />} />
        <Route path="/about/Strength" element={<Students />} />
        <Route path="/student-council" element={<StudentCouncil />} />
        <Route
          path="/about/parents-teachers-association"
          element={<ParentTeachersAssociation />}
        />


        
        <Route path="/alumni" element={<AlumniAbout />} />
        <Route path="/alumni-students" element={<AlumniStudents />} />
        <Route path="/alumni/alumni-enroll" element={<AlumniEnroll />} />
        <Route path="/academics" element={<AcademicsSection />} />
        <Route path="/alumni-form" element={<AlumniForm />} />



        <Route path="/ENQUIRE" element={<Enquiry />} />
      
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/Sciencelab" element={<Sciencelab />} />
        <Route path="/facilities/Computerlab" element={<Computerlab />} />
        <Route path="/facilities/Library" element={<Library />} />
        <Route path="/Playarea" element={<Playarea />} />
        <Route path="/facilities/Smartclass" element={<Smartclass />} />
        <Route path="/school-software" element={<SchoolManagementSoftware />} />
        <Route path="/facilities/Rta" element={<Rta />} />

        <Route path="/facilities/Bus" element={<Bus />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Otherdetail" element={<Otherdetail />} />
        <Route path="/login" element={<Log />} />
        <Route path="/admissions" element={<Admissions />} />
    

        <Route path="/StudentInfoForm" element={<StudentInfoForm />} />
        <Route path="/AddInfo" element={<AddInfo />} />
        <Route path="/Detailsother" element={<Detailsother />} />
        <Route path="/Otherdetail" element={<Otherdetail />} />
        <Route path="/Fatherinfo" element={<Fatherinfo />} />
        <Route path="/Motherinfo" element={<Motherinfo />} />
        <Route path="/Healthdetail" element={<Healthdetail />} />
        <Route path="/Sucess" element={<Sucess />} />

{/* students */}
        <Route path="/AboutHero" element={<AboutHero />} />
        <Route path="/academics/SSC" element={<Ssc />} />
        <Route path="/academics/NCC" element={<Ncc />} />
        <Route path="/academics/ntsc" element={<NTSE />} />
        <Route path="/academics/homi-bhaba" element={<StdX />} />
        <Route path="/academics/scholarship" element={<Scholor />} />
        <Route path="/academics/mtsc" element={<MTSE />} />

















        {/* <Mission />
        <TreeCol />
        <Statics />
        <Whywe />
        <Topper />
        <Applynow /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
