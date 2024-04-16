import React, { useEffect, useState } from 'react';
import supabase from '../../utils/SupaClient';
import { Link } from 'react-router-dom';

function AllCoursesCard() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      let { data, error } = await supabase
        .from('Course')
        .select('*')

      setCourses(data)
    }

    getCourses()
  }, [])

  const customers = [
    {
      id: '0',
      name: 'D326 - Advanced Data Management',
      email: '7 days',
      location: '3/5',
      spent: '12',
    },
    {
      id: '1',
      name: 'D387 - Advanced Java',
      email: '12 days',
      location: '4/5',
      spent: '15',
    },
    {
      id: '2',
      name: 'C955 - Applied Probability & Statistics',
      email: '6 days',
      location: '3/5',
      spent: '7',
    },
    {
      id: '3',
      name: 'C957 - Applied Algebra',
      email: '3 days',
      location: '2/5',
      spent: '3',
    },
    {
      id: '4',
      name: 'C963 - American Politics and the US Constitution',
      email: '5 days',
      location: '2/5',
      spent: '18',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Bachelor of Science, Software Engineering</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Course</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time to Complete</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Resources</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Difficulty Rating</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                courses.map(course => {
                  return (
                    <tr key={course.id}>
                      <td className="p-2 whitespace-nowrap">
                        <Link to={`/courses/${course.course_code}`}>
                          <div className="flex items-center">
                            <div className="font-medium text-slate-800 dark:text-slate-100">{course.course_name}</div>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default AllCoursesCard;