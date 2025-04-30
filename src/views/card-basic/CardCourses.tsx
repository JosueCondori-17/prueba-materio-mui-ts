// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import SelectCourses from '@/components/academy/my-courses/Select'

const courses = [
  {
    title: 'React Native',
    description: 'Master ReactJS...',
    author: 'John Doe',
    duration: '16h 16m',
    img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg',
    rating: 4.8
  },
  {
    title: 'Node Js',
    description: 'Master Node + Express...',
    author: 'John Doe',
    duration: '16h 12m',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&s',
    rating: 4.4
  }
  // ejemplos de cursos
]

export default function CardCourses() {
  return (
    <div className='flex gap-2.5 bg-[white]' style={{ flexDirection: 'column', padding: '1rem' }}>
      <div className='flex flex-wrap gap-2.5 justify-between'>
        <h5>Modelos </h5>
        <SelectCourses />
      </div>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <img src={course.img} width={'100%'} height={'150rem'} />
                <Typography variant='h6'>{course.title}</Typography>
                <Typography variant='body2'>Autor: {course.author}</Typography>
                <Typography variant='body2'>{course.description}</Typography>
                <Typography variant='caption'>Duración: {course.duration}</Typography>
                <Typography variant='caption'>⭐ {course.rating}</Typography>
                <div className='flex flex-wrap gap-2.5'>
                  <Button variant='outlined' sx={{ mt: 2, flexGrow: 1 }}>
                    Start over
                  </Button>
                  <Button variant='outlined' sx={{ mt: 2, flexGrow: 1 }}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
