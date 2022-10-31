import { useAuth0 } from "@auth0/auth0-react"

function Profile() {
  
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return null
  }
  return (
    <>
      {
        isAuthenticated && 
        <div style={{ padding: 10}}>Email: {user.email}</div>
      }
    </>
  );
}

export default Profile;