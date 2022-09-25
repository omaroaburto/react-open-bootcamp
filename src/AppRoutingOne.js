import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Aside from "./components/pure/Aside";
//import Logout from "./components/pure/forms/Logout";
import { AuthContextProvider} from "./context/AuthContext";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/Profile";
import TaskDetailPage from "./pages/task/TaskDetailPage";
import TaskPage from "./pages/task/TaskPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const AppRoutingOne = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div>
       
          <Aside/>
          <main>
            <Routes>
              <Route path="/" element={<PublicRoutes />}>
                {["/", "/home"].map((url, index) => (
                  <Route key={`h${index}}`} path={url} element={<HomePage />} />
                ))}
                {["/about", "/faqs"].map((url, index) => (
                  <Route key={`a${index}`} path={url} element={<AboutPage />} />
                ))}
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="/profile" element={<PrivateRoutes />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              {/* <Route path="/logout" element={<PrivateRoutes />}>
                <Route path="/logout" element={<Logout />}></Route>
              </Route> */}
              <Route path="/task" element={<PrivateRoutes />}>
                <Route path="/task" element={<TaskPage />} />
                <Route path="/task/:id" element={<TaskDetailPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default AppRoutingOne;
