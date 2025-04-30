'use client'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const SelectCourses = () => {
  const [modelo, setModelo] = useState('todos')

  return (
    <FormControl>
      <InputLabel id='modelo-label'>Courses</InputLabel>
      <Select labelId='modelo-label' value={modelo} onChange={e => setModelo(e.target.value)} label='Cursos'>
        <MenuItem value='todos'>Todos los Modelos</MenuItem>
        <MenuItem value='personalizados'>Mis Modelos Personalizados</MenuItem>
        <MenuItem value='activados'>Modelos Activados</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectCourses
