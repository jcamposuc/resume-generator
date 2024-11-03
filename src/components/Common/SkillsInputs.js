import { useFormContext } from "react-hook-form";
import { useState } from "react";
import AddToListButton from "./AddToListButton";
import FieldSetLayout from "./FieldSetLayout";

export const SkillsInputs = () => {
    const { watch, setValue, getValues } = useFormContext();
    const [skill, setSkill] = useState('');

    const addToList = () => {
        setValue('skills', [...(skills ?? []), skill]);
        setSkill('');
    }

    const removeSkill = (index) => {
        const values = getValues('skills');
        values.splice(index, 1);

        setValue('skills', values.length ? values : null);
    }

    const skills = watch('skills');

    return (
        <FieldSetLayout legend="Skills">
            <div className="col-span-2">

                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type here!</label>
                <div className="relative">
                    <input
                        type="text"
                        className="block w-full text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        placeholder="Skill (Ex. Web Design)"
                        value={skill}
                        required={skills?.length === 0}
                        onChange={(e) => setSkill(e.target.value)} />
                    <AddToListButton
                        handleClick={addToList}
                        disabled={!skill}
                    />
                </div>
            </div>
            <div className="flex flex-wrap col-span-2 gap-1">
                {
                    skills?.map((skill, index) => (
                        <span key={`skill-${index}`} className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded me-2 dark:bg-gray-700 dark:text-gray-300">
                            {skill}
                            <button type="button" className="inline-flex items-center p-1 text-sm text-gray-400 bg-transparent rounded-sm ms-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                <svg onClick={() => removeSkill(index)} className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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