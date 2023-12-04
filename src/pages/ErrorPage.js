import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  // console.log("error from error page is:  ", error)

  return (
    <>
      <div>Oops, an error has occured!</div>
      {/* {error && <p>{error.data.message}</p>} */}
    </>
  
  )
}

export default ErrorPage