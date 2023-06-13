import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  return (
    <div>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;
