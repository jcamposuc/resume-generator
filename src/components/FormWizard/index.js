import React from 'react';
import { useLocation } from 'react-router-dom';

const activeClasses = {
    elem: "text-stone-600 dark:text-stone-500 bold",
    indicator: "border-stone-600 dark:border-stone-500",
};
const inactiveClasses = {
    elem: "",
    indicator: "border-gray-500 dark:border-gray-400",
}


export const FormWizard = () => {
    const { pathname } = useLocation();

    const defaultClassesByPathname = {
        "/": inactiveClasses,
        "/fill-resume": inactiveClasses,
        "/download": inactiveClasses,
    };
    defaultClassesByPathname[pathname] = activeClasses;

    return (
        <ol className="flex items-center w-full p-3 mt-5 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-sm shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li className={`flex items-center ${defaultClassesByPathname["/"].elem}`} >
                <span className={`flex items-center justify-center w-5 h-5 text-xs border rounded-full me-2 shrink-0 ${defaultClassesByPathname["/"].indicator}`}>
                    1
                </span>
                Select <span className="hidden sm:inline-flex sm:ms-2">Template</span>
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li className={`flex items-center ${defaultClassesByPathname["/fill-resume"].elem}`}>
                <span className={`flex items-center justify-center w-5 h-5 text-xs border rounded-full me-2 shrink-0 ${defaultClassesByPathname["/fill-resume"].indicator}`}>
                    2
                </span>
                Fill <span className="hidden sm:inline-flex sm:ms-2">Resume</span>
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li className={`flex items-center ${defaultClassesByPathname["/download"].elem}`}>
                <span className={`flex items-center justify-center w-5 h-5 text-xs border rounded-full me-2 shrink-0 ${defaultClassesByPathname["/download"].indicator}`}>
                    3
                </span>
                Download
            </li>
        </ol>
    );
};