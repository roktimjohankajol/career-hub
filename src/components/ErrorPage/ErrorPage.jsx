import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  const error = useRouteError();

  return (
    <div className="grid grid-cols-1 place-items-center min-h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-6xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <button className="btn" onClick={handleGoBackBtn}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
