import { useFormContext } from "react-hook-form";
import { useState } from "react";
import FieldSetLayout from "./FieldSetLayout";
import { AddFieldToList } from "./AddFieldToList";

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
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only  ">Type here!</label>
                <div className="relative">
                    <AddFieldToList.InputField
                        value={language}
                        required={languages?.length === 0}
                        handleChange={setLanguage}
                        handleAddToList={addToList}
                        placeholder="English / Fluency"
                    />
                </div>
            </div>
            <div className="flex flex-wrap col-span-2 gap-1">
                <AddFieldToList.ListItems
                    items={languages}
                    handleRemove={removeLanguage} />
            </div>
        </FieldSetLayout>
    );
};