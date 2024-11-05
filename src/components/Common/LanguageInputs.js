import { useFormContext } from "react-hook-form";
import { useState } from "react";
import AddToListButton from "./AddToListButton";
import FieldSetLayout from "./FieldSetLayout";

export const LanguageInputs = () => {
    const { watch, setValue, getValues } = useFormContext();
    const [language, setLanguage] = useState('');

    const addToList = () => {
        setValue('languages', [...(languages ?? []), language]);
        setLanguage('');
    }

    const removeLanguage = (index) => {
        const values = getValues('languages');
        values.splice(index, 1);

        setValue('languages', values.length ? values : null);
    }

    const languages = watch('languages');

    return (
        <FieldSetLayout legend="Languages">
            <div className="col-span-2">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type here!</label>
                <div className="relative">
                    <input
                        type="text"
                        className="block w-full text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        placeholder="English / Fluency"
                        value={language}
                        required={languages?.length === 0}
                        onChange={(e) => setLanguage(e.target.value)} />
                    <AddToListButton
                        handleClick={addToList}
                        disabled={!language}
                    />
                </div>
            </div>
            <div className="flex flex-wrap col-span-2 gap-1">
                {
                    languages?.map((language, index) => (
                        <span key={`language-${index}`} className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded me-2 dark:bg-gray-700 dark:text-gray-300">
                            {language}
                            <button type="button" className="inline-flex items-center p-1 text-sm text-gray-400 bg-transparent rounded-sm ms-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                <svg onClick={() => removeLanguage(index)} className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Remove badge</span>
                            </button>
                        </span>
                    ))
                }
            </div>
        </FieldSetLayout>
    );
};