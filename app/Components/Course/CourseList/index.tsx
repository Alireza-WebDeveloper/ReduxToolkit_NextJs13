'use client';
import { CourseTypeRes } from '@/app/Models/Course';
import { Grid } from '@mui/material';
import { FC } from 'react';
import CourseItem from '../CourseItem';
type CourseListProps = {
  course: CourseTypeRes;
};

const CourseList: FC<CourseListProps> = ({ course }) => {
  const renderCourseItem = () => {
    return course.map((crs) => {
      return (
        <Grid key={crs.id} item xs={4}>
          <CourseItem crs={crs} />
        </Grid>
      );
    });
  };
  return (
    <Grid container spacing={3}>
      {renderCourseItem()}
    </Grid>
  );
};

export default CourseList;
