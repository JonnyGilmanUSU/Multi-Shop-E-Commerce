import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 500) {
    return (
    <>
    <p>A server error has occurred: </p>
    <p>{error.data.message}</p>
    </>
    )
  }


  return (
    <>
      <div>Oops, an error has occured!</div>
    </>
  
  )
}

export default ErrorPage