import AboutUs from './components/AboutUs.tsx'
import CourseList from './components/CourseList.tsx'
import AdvanceCourseList from './components/AdvanceCourseList.tsx'
function App() {
  const AdvanceCourses = [
    {
      id: 1,
      name: 'React',
      duration: '30 days',
    },
  
    {
      id: 2,
      name: 'JavaScript',
      duration: '30 days',
    },

    {
      id: 3,
      name: 'HTML',
      duration: '30 days',
    }
  ];

  return (

    <>
      {/* <CourseList></CourseList> */}
      <AdvanceCourseList courses={AdvanceCourses}/>
      {/* <AboutUs></AboutUs> */}
    </>
  )
}

export default App
