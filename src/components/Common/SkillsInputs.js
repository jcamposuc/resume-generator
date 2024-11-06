import { useFormContext } from "react-hook-form";
import { useState } from "react";
import FieldSetLayout from "./FieldSetLayout";
import { AddFieldToList } from "./AddFieldToList";

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
                    <AddFieldToList.InputField
                        value={skill}
                        required={skills?.length === 0}
                        handleChange={setSkill}
                        handleAddToList={addToList}
                        placeholder="Skill (Ex. Web Design)"
                    />
                </div>
            </div>
            <div className="flex flex-wrap col-span-2 gap-1">
                <AddFieldToList.ListItems
                    items={skills}
                    handleRemove={removeSkill} />
            </div>
        </FieldSetLayout>
    );
};