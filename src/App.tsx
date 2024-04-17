import "./App.css";
import useFetch from "./hooks/useFetch";
import { UserResponse } from "./types/Users";
import Loader from "./components/Loader/Loader";
import Profile from "./pages/Profile";

function App() {
  const { data, error, loading } = useFetch<UserResponse>({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
  return (
    <div className="w-full px-6 py-4 flex justify-center">
      <Profile data={data} />
    </div>
  );
}

export default App;
