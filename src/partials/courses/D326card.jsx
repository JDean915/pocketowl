import React from 'react';
import { RatingWithText } from '../../components/RatingWithText';

function D326card() {

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100 mb-1">D326 - Advanced Data Management</h2><RatingWithText />
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2">Summary</div>
        </div>
        <div className="text-1xl text-slate-800 dark:text-slate-100 mr-2 mt-2">It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less norm </div>
        <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2 mt-3">Path to Competency</div>
        <div className="text-1xl text-slate-800 dark:text-slate-100 mr-2 mt-2">It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web  page editors now use Lorem Ipsum as their default model text, and a  search for 'lorem ipsum' will uncover many web sites still in their  infancy.<br/><br/>



Various versions have evolved over the years, sometimes by  accident, sometimes on purpose injected humour and the like.It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less<br/><br/>



Normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web  page editors now use Lorem Ipsum as their default model text, and a  search for 'lorem ipsum' will uncover many web sites still in their  infancy.<br/><br/>




</div>
        
      </div>
    </div>
  );
}

export default D326card;