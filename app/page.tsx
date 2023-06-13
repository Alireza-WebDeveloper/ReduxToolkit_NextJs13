'use client';
import { FC } from 'react';
import GHome from './Components/GHome';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './StateManagement/Store';
import { asyncGetAllCourses } from './StateManagement/Slice/Course';
import Loading from './Components/Loading';
type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((store) => store.course);
  useEffect(() => {
    dispatch(asyncGetAllCourses());
  }, []);
  if (loading) return <Loading />;
  if (error) throw new Error(error);
  return <GHome course={data} />;
};

export default Home;
