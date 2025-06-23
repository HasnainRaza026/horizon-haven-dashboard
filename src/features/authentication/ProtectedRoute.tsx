import { useNavigate } from "react-router-dom";
import useFetchUser from "./useFetchUser";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import { useEffect } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const { isLoading, isError, isAuthenticated } = useFetchUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <PageSpinner />;
  }
  if (isError) {
    return <NotFound message="Something went wrong" />;
  }

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
