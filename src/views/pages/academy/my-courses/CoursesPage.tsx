// MUI imports
import { Button, TextField } from '@mui/material'

//Components imports
import CardCourses from '@/views/card-basic/CardCourses'

const CoursesPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-2 bg-[white] mb-2' style={{ padding: '1rem 25rem' }}>
        <TextField fullWidth label='Find your course' variant='outlined' />
        <Button sx={{ background: 'blue', height: '100%', padding: '1rem' }}>🔍</Button>
      </div>
      <CardCourses />
    </div>
  )
}

export default CoursesPage
