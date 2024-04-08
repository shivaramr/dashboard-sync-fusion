import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiShopware } from "react-icons/si";
import { HiInformationCircle } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import data from "../data/login.json";

const content = `Username: test@mail.com &nbsp; Password: test`;

const Login = () => {
  const { currentColor, setIsAuth } = useStateContext();
  const { email, password } = data;

  return (
    <div className="flex justify-center h-full w-full">
      <div className="flex flex-col justify-center self-center items-center p-10 sm:w-400 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <div className="flex justify-center self-center items-center">
          <div className="gap-3 flex text-3xl mb-2 font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware />
            <span>Shoppy</span>
            <TooltipComponent content={content} position="TopCenter" className="h-min">
              <HiInformationCircle />
            </TooltipComponent>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "*Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email === email && values.password === password) {
                setIsAuth(true);
                localStorage.setItem("isAuth", 1);
                window.location.pathname = "/ecommerce";
              } else {
                alert("Please check the login credentials.");
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col p-3 gap-2">
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Username"
                  className="p-2 rounded-3xl outline-none dark:bg-[#E8F0FE]"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 font-semibold" />
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 rounded-3xl outline-none dark:bg-[#E8F0FE]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 font-semibold"
                />
                <Button
                  color="white"
                  bgColor={currentColor}
                  text={isSubmitting ? "Logging in..." : "Login"}
                  borderRadius="10px"
                  marginTop="10px"
                  size="md"
                  type="submit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
