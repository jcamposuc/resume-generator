import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Job } from "../Template1";
import AddToListButton from "./AddToListButton";
import AddOrEditItem from "./AddOrEditItem";
import FieldSetLayout from "./FieldSetLayout";
import { getControlledFields } from "../../utilities";
import ItemsAddedLayout from "./ItemsAddedLayout";

const initialValue = {
    position: "",
    company: "",
    date: "",
    responsabilities: [],
};

export const ExperiencesInputs = ({ children }) => {
    const { watch, setValue, getValues } = useFormContext();
    const [experience, setExperience] = useState(initialValue);
    const [responsability, setResponsability] = useState('');
    const [indexToEdit, setIndexToEdit] = useState(-1);

    const initExperience = () => {
        setExperience(initialValue);
        setResponsability("");
    }

    const addExperienceToList = () => {
        setValue('experiences', [...(experiences ?? []), experience]);
        initExperience();
    }

    const removeExperience = (index) => {
        const values = getValues('experiences');
        values.splice(index, 1);

        setValue('experiences', values.length ? values : null);
    }

    const editExperience = (experienceToEdit, index) => {
        setExperience(experienceToEdit);
        setIndexToEdit(index);
    }

    const replaceExperience = () => {
        const newExperiences = experiences.with(indexToEdit, experience);
        setValue('experiences', newExperiences);
        initExperience();
        setIndexToEdit(-1);
    }

    const addResponsabilityToList = () => {
        setExperience({
            ...experience,
            responsabilities: [...experience.responsabilities, responsability],
        });
        setResponsability("");
    }

    const removeResponsability = (index) => {
        const { responsabilities: items } = experience;

        items.splice(index, 1);
        setExperience({
            ...experience,
            responsabilities: items,
        });
    }

    const experiences = watch('experiences');
    const canAdd = experience.position && experience.company && experience.date && experience.responsabilities?.length > 0;

    return (
        <FieldSetLayout legend="Experiences">
            <div className="relative col-span-2">
                <div className="relative">
                    {getControlledFields([{
                        obj: experience,
                        placeholder: "Position (Ex. APPLICATIONS DEVELOPER)",
                        propName: "position",
                        setPropValue: setExperience,
                        required: experiences?.length === 0,
                    }, {
                        obj: experience,
                        placeholder: "Company (Ex. Really Great Company)",
                        propName: "company",
                        setPropValue: setExperience,
                        required: experiences?.length === 0,
                    }, {
                        obj: experience,
                        placeholder: "Date (Ex. 2016 - Present)",
                        propName: "date",
                        setPropValue: setExperience,
                        required: experiences?.length === 0,
                    }])}
                    <input
                        type="text"
                        className="block w-full text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        placeholder="Responsability (Ex. Databse administration)"
                        value={responsability}
                        onChange={(e) => setResponsability(e.target.value)} />
                    <AddToListButton
                        handleClick={addResponsabilityToList}
                        disabled={!responsability}
                    />
                </div>
                <ListItems
                    items={experience.responsabilities}
                    handleRemove={removeResponsability}
                />
                <AddOrEditItem
                    handleAddClick={addExperienceToList}
                    handleEditClick={replaceExperience}
                    disabled={!canAdd}
                    indexToEdit={indexToEdit}
                />
            </div>
            <div className="flex flex-wrap col-span-2 gap-1 mt-3">
                <ItemsAddedLayout
                    items={experiences}
                    Comp={(item) => <Job {...item} />}
                    handleEdit={editExperience}
                    handleRemove={removeExperience}
                />
            </div>
            {children}
        </FieldSetLayout>
    );
};

const ListItems = ({ items, handleRemove }) => {
    return (
        <ul className='mt-1 list-disc list-inside'>
            {
                items.map((responsability, index) => (
                    <li className='pl-1 mb-1' key={`item-${index}`}>
                        <button
                            type="button"
                            className="px-2 py-1 text-sm font-medium text-white bg-orange-900 rounded-sm hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-orange-900 dark:focus:ring-red-800"
                            onClick={() => handleRemove(index)}>
                            Remove
                        </button>
                        <span className="ml-1">{responsability}</span>
                    </li>
                ))
            }
        </ul>
    );
};