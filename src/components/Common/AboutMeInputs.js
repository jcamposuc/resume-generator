import { useFormContext } from "react-hook-form";
import { InputTextarea } from "../../utilities";
import FieldSetLayout from "./FieldSetLayout";

export const AboutMeInputs = ({ children }) => {
    const { register, control } = useFormContext();

    return (
        <FieldSetLayout legend="PROFILE">
            <div className="col-span-2">
                <InputTextarea
                    fieldName="about_me.profile"
                    labelText="Profile"
                    register={register}
                    control={control} />
            </div>
            {children}
        </FieldSetLayout>
    );
};