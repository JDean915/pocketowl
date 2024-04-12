import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../utils/SupaClient";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SupaAuth = () => {
  const navigate = useNavigate();

  // redirect workaround, credit to https://github.com/supabase-community/supabase-by-example/blob/main/reset-flow/auth-ui/react/src/routes/auth/signin.tsx
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  });

  return (

    <section
      className={`flex
    md:flex-row flex-col`}
    >
      <div className={`flex items-center md:flex-row flex-col mt-10`}>
        <div
          className={`flex flex-col bg-white w-[400px] h-[600px] rounded-xl shadow-lg shadow-customBlue`}
        >
          <div className={"w-[300px] ml-12 pt-6"}>
            <Auth
              supabaseClient={supabase}
              view="sign_in"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: "hsl(153 60.0% 53.0%)",
                      brandAccent: "#0006B1",
                      brandButtonText: "gray",
                      defaultButtonBackground: "#0006B1",
                      defaultButtonBackgroundHover: "white",
                      defaultButtonBorder: "#0006B1",
                      defaultButtonText: "lightgray",
                      dividerBackground: "#0006B1",
                      inputBackground: "transparent",
                      inputBorder: "#0006B1",
                      inputBorderHover: "#0006B1",
                      inputBorderFocus: "gray",
                      inputText: "black",
                      inputLabelText: "#0006B1",
                      inputPlaceholder: "darkgray",
                      messageText: "gray",
                      messageTextDanger: "red",
                      anchorTextColor: "#0006B1",
                      anchorTextHoverColor: "darkgray",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupaAuth;
