/* import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://tqofpvsbigvicndmdnna.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb2ZwdnNiaWd2aWNuZG1kbm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNzg3MzQsImV4cCI6MjAyNzc1NDczNH0.pXo0Xbj7845kvNixJDt4kZI70mj8tT5IIEPny5aZMjw"
);

const SupaAuth = () => (
  <section
    className={`flex
  md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={`flex items-center md:flex-row flex-col mt-10`}>
      <div
        className={`flex flex-col bg-white w-[400px] h-[600px] rounded-xl shadow-lg shadow-customBlue`}
      >
        <div className={"w-[300px] ml-12 pt-6"}>
          <Auth
            supabaseClient={supabase}
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

export default SupaAuth; */
