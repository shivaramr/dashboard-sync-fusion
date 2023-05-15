import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { Login } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import { routes } from "./routes";
import "./App.css";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isAuth,
    setIsAuth,
  } = useStateContext();
  var authCheck = !!parseInt(localStorage.getItem("isAuth"));

  useEffect(() => {
    if (authCheck) {
      setIsAuth(true);
    } else {
      if (window.location.pathname !== "/login") {
        window.location.pathname = "/login";
      }
      setIsAuth(false);
    }
  }, [authCheck, setIsAuth]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {isAuth && (
            <>
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{ background: currentColor, borderRadius: "50%" }}
                    onClick={() => setThemeSettings(true)}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
            </>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? (isAuth ? "lg:ml-72" : "pl-auto lg:pl-72") : "flex-2"
            }`}
          >
            {isAuth && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
            )}
            <>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {isAuth ? (
                  <>
                    {/* Dashboard */}
                    <Route
                      path="/"
                      element={<Navigate to="/ecommerce" replace />}
                    />
                    {routes.map(({ path, element }, idx) => (
                      <Route path={path} element={element} key={idx} />
                    ))}
                  </>
                ) : (
                  <>
                    {/* Login */}
                    <Route path="/login" element={<Login />} />
                  </>
                )}
              </Routes>
            </>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
