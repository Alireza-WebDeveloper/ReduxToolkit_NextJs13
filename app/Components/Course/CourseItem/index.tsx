'use client';
import { CourseTypeObj } from '@/app/Models/Course';
import { Box } from '@mui/material';

import { FC } from 'react';

type CourseListProps = {
  crs: CourseTypeObj;
};

const CourseItem: FC<CourseListProps> = ({ crs }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.warning.main,
        borderRadius: '0.2rem',
        textTransform: 'capitalize',
        p: 2,
      }}
    >
      {crs.title}
    </Box>
  );
};

export default CourseItem;
