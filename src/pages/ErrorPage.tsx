import React from 'react';
import { useRouteError, isRouteErrorResponse, useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const location = useLocation();

  // Optional: Log the error to the console
  console.error(error);

  if (!error) {
    return (
      <>
        <PageTitle title="Jose | 404" />
        <div className="container text-center my-5 mx-auto min-vh-100 d-flex flex-column">
          <div className="row justify-content-center flex-grow-1">
            <div className="col-12 col-md-8">
              <h1>404 - Page Not Found</h1>
              <p className="lead">Sorry, the page "{location.pathname}" does not exist.</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Determine the type of error
  if (isRouteErrorResponse(error)) {
    // Errors thrown from loaders or actions
    return (
      <>
        <PageTitle title={`Jose | Error ${error.status}`} />
        <div className="container text-center my-5 mx-auto min-vh-100 d-flex flex-column">
          <div className="row justify-content-center flex-grow-1">
            <div className="col-12 col-md-8">
              <h1>{error.status} - {error.statusText}</h1>
              <p className="lead">{error.data?.message || 'An error occurred while loading the page.'}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (error instanceof Error) {
    // JavaScript errors
    return (
      <>
        <PageTitle title="Jose | Error" />
        <div className="container text-center my-5 mx-auto min-vh-100 d-flex flex-column">
          <div className="row justify-content-center flex-grow-1">
            <div className="col-12 col-md-8">
              <h1>Unexpected Error</h1>
              <p className="lead">{error.message}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Fallback for unknown errors
    return (
      <>
        <PageTitle title="Jose | Error" />
        <div className="container text-center my-5 mx-auto min-vh-100 d-flex flex-column">
          <div className="row justify-content-center flex-grow-1">
            <div className="col-12 col-md-8">
              <h1>Oops!</h1>
              <p className="lead">An unexpected error has occurred.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ErrorPage;