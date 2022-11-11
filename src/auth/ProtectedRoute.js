import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/ui/Loading";

export default function ProtectedRoute({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <Component />;
};