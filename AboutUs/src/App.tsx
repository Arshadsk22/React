import AdvanceCourseList from './components/AdvanceCourseList.tsx'
import fetchCourses from './Services/CourseServices.tsx'

function App() {

  return (

    <>
      {/* <CourseList></CourseList> */}
      <AdvanceCourseList courses={fetchCourses()} />
      {/* <AboutUs></AboutUs> */}
    </>
  )
}

export default App
