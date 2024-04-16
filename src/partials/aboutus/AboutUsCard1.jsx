import React from "react";
import { RatingWithText } from "../../components/RatingWithText";

function AboutUsCard1() {
  return (
    <div className="overflow-auto max-h-[850px] col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100 mb-1">
          Meet the Project.
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2 mt-2">
            The Mission
          </div>
        </div>
        <div className="text-1xl mr-2 mt-2">
          Our mission is to help students progress in their educational journey by providing an application that consolidates resources, rates courses off of difficulty, and provides resource completion tracking and averages the time to complete each course.{" "}
        </div>
        <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2 mt-5">
          Project Details
        </div>
        <div className="text-1xl mr-2 mt-2">
          Front-End: Vite, React, TailwindCSS
          <br />
          <br />
          Back-End/Database: PostgreSQL, Supabase
          <br />
          <br />
          User Management and Authentication: Supabase Auth
          <br />
          <br />
          Hosting/Deployment: ?
          <br />
          <br />
          <br />
          <br />
          Vestibulum malesuada at justo ut dapibus. Praesent et consequat ex.
          Nullam vel enim id velit mollis fringilla vitae at mi. Aliquam posuere
          mauris et risus finibus, quis convallis lectus euismod. Aliquam
          bibendum nibh eu nisi sodales, eget placerat erat vehicula. In gravida
          purus sit amet sapien dignissim elementum. Vestibulum venenatis odio
          in porttitor tempor. Mauris venenatis dolor mauris, vel tristique urna
          tempor eu. Sed hendrerit condimentum justo non maximus. Sed tellus
          elit, rutrum ut tortor nec, porttitor pellentesque nisl.
          <br />
          <br />
          <br />
          <br />
          Maecenas sit amet dapibus diam, vitae facilisis elit. Mauris luctus
          vitae neque ac bibendum. Sed egestas, dui sit amet viverra
          pellentesque, elit sem aliquet sem, in vestibulum est augue ut risus.
          In malesuada eros eget vestibulum gravida. Integer gravida varius
          elementum. Ut malesuada magna eu lobortis pulvinar. Suspendisse eu
          tempor erat, quis pellentesque massa. Vivamus tincidunt rutrum ante
          sit amet aliquet. Sed vestibulum, dui sed pellentesque eleifend,
          tellus sem egestas magna, vel auctor augue ex a libero. Aenean gravida
          purus eu mi pretium aliquam. Curabitur et lobortis elit. Donec
          sollicitudin eget justo quis rutrum. Sed non efficitur felis, quis
          pulvinar enim. Suspendisse potenti.
          <br />
          <br />
          <br />
          <br />
          Curabitur malesuada tristique erat non imperdiet. Ut porttitor, tortor
          ac venenatis ullamcorper, justo lacus gravida nisi, ac malesuada odio
          mi non lectus. Aliquam sollicitudin gravida metus, tincidunt mattis
          justo porttitor vel. Ut condimentum pulvinar diam sed congue.
          Vestibulum accumsan vitae nisl sit amet cursus. In lacinia nulla et
          sapien fringilla, et faucibus sapien porta. Sed sodales tristique
          magna, eget dictum sapien lobortis iaculis. Maecenas neque ipsum,
          eleifend et vestibulum sit amet, posuere sit amet dolor. In hac
          habitasse platea dictumst. Etiam nunc magna, dapibus at porta vel,
          porta nec ipsum. Suspendisse sagittis ut est non sollicitudin.
          <br />
          <br />
          <br />
          <br />
          Donec fermentum nunc eget tortor pellentesque tincidunt. Quisque justo
          odio, sollicitudin non malesuada eget, luctus ac mauris. Nunc
          scelerisque leo sit amet vestibulum fringilla. Proin at magna neque.
          Curabitur imperdiet dui et eros volutpat iaculis. Duis semper, nisi in
          aliquet sollicitudin, nisi nulla tincidunt est, in ornare est ipsum in
          mi. Aliquam erat volutpat. Proin tempor rutrum sem, eu tincidunt diam.
          In non sapien nec massa finibus sagittis. Mauris congue massa eu
          lectus accumsan, ac ultrices massa tempus.
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard1;