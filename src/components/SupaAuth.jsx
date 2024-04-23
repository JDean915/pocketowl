import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../utils/SupaClient";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg"

const SupaAuth = () => {
  const navigate = useNavigate();

  // redirect workaround, credit to https://github.com/supabase-community/supabase-by-example/blob/main/reset-flow/auth-ui/react/src/routes/auth/signin.tsx
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  });

  return (
    <div className="flex justify-center pt-20 ">
      <div className={`flex items-center md:flex-row flex-col mt-10`}>
        <div
          className={`flex flex-col bg-slate-800 w-[400px] h-[530px] rounded-xl`}
        >
          <div className={"w-[300px] ml-12 pt-6"}>
          <img 
            src={logo}
            className="mx-3 h-[100px] w-[250px]"/>
            <div className="mt-5">
            <Auth
              supabaseClient={supabase}
              view="sign_in"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: "rgb(15 23 42)",
                      brandAccent: "rgb(3 105 161)",
                      brandButtonText: "gray",
                      defaultButtonBackground: "rgb(51 65 85)",
                      defaultButtonBackgroundHover: "white",
                      defaultButtonBorder: "rgb(71 85 105)",
                      defaultButtonText: "lightgray",
                      dividerBackground: "rgb(148 163 184)",
                      inputBackground: "rgb(51 65 85)",
                      inputBorder: "rgb(148 163 184)",
                      inputBorderHover: "#0006B1",
                      inputBorderFocus: "gray",
                      inputText: "black",
                      inputLabelText: "lightgray",
                      inputPlaceholder: "darkgray",
                      messageText: "lightgray",
                      messageTextDanger: "red",
                      anchorTextColor: "lightgray",
                      anchorTextHoverColor: "darkgray",
                    },
                  },
                },
              }}
              providers={email}
            />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default SupaAuth;
