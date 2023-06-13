'use client';
import { FC } from 'react';
import { Grid } from '@mui/material';

import { CourseTypeRes } from '@/app/Models/Course';
import CourseList from '../Course/CourseList';
type GHomeProps = {
  course: CourseTypeRes;
};

const GHome: FC<GHomeProps> = ({ course }) => {
  console.log(course);
  return (
    <Grid container>
      <Grid item xs={12}>
        <CourseList course={course} />
      </Grid>
    </Grid>
  );
};

export default GHome;
