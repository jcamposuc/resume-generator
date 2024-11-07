import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Institution } from "../Template1";
import AddOrEditItem from "./AddOrEditItem";
import FieldSetLayout from "./FieldSetLayout";
import ItemsAddedLayout from "./ItemsAddedLayout";
import { getControlledFields } from "../../utilities";

const initialValue = {
    grade: "",
    institute: "",
    endDate: "",
};

const mapEducation = (ed) => ({
    position: ed.grade,
    company: ed.institute,
    date: ed.endDate,
});

export const EducationInputs = () => {
    const { watch, setValue, getValues } = useFormContext();
    const [education, setEducation] = useState(initialValue);
    const [indexToEdit, setIndexToEdit] = useState(-1);

    const initEducation = () => {
        setEducation(initialValue);
    }

    const addEducationToList = () => {
        setValue('educations', [...(educations ?? []), education]);
        initEducation();
    }

    const removeEducation = (index) => {
        const values = getValues('educations');
        values.splice(index, 1);

        setValue('educations', values?.length ? values : null);
    }

    const editEducation = (educationToEdit, index) => {
        setEducation({
            ...educationToEdit,
            grade: educationToEdit.position,
            institute: educationToEdit.company,
            endDate: educationToEdit.date,
        });
        setIndexToEdit(index);
    }

    const replaceEducation = () => {
        const newEducations = educations.with(indexToEdit, education);
        setValue('educations', newEducations);
        initEducation();
        setIndexToEdit(-1);
    }

    const educations = watch('educations');
    const canAdd = education.grade && education.institute && education.endDate;

    return (
        <FieldSetLayout legend="Education">
            <div className="col-span-2">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only  ">Type here!</label>
                <div className="relative">
                    {getControlledFields([{
                        obj: education,
                        placeholder: "Grade (Ex. SECONDARY SCHOOL)",
                        propName: "grade",
                        setPropValue: setEducation,
                        required: educations?.length === 0,
                    }, {
                        obj: education,
                        placeholder: "Institute (Ex. Really Great High School)",
                        propName: "institute",
                        setPropValue: setEducation,
                        required: educations?.length === 0,
                    }, {
                        obj: education,
                        placeholder: "Date (Ex. 2016 - Present)",
                        propName: "endDate",
                        setPropValue: setEducation,
                        required: educations?.length === 0,
                    }])}
                </div>
                <AddOrEditItem
                    handleAddClick={addEducationToList}
                    handleEditClick={replaceEducation}
                    disabled={!canAdd}
                    indexToEdit={indexToEdit}
                />
            </div>
            <div className="flex flex-wrap col-span-2 gap-1 mt-3">
                <ItemsAddedLayout
                    items={educations?.map(mapEducation)}
                    Comp={(item) => <Institution {...item} />}
                    handleEdit={editEducation}
                    handleRemove={removeEducation}
                />
            </div>
        </FieldSetLayout>
    );
};