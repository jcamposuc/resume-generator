import { useFormState } from "react-hook-form";
import ControlledInputText from "./components/Common/ControlledInputText";

const FieldError = ({ fieldName, required, control, }) => {
    const [objName, propName] = fieldName.split(".");
    const { errors } = useFormState({ control });

    return (
        required && errors?.[objName]?.[propName]?.type === "required" && (
            <small className="mr-auto font-semibold text-red-900">*Required field</small>
        )
    )
}

const InputLabel = ({ fieldName, labelText, required }) => (
    <label
        className='mb-2 ml-0 text-sm font-medium text-gray-900   '
        htmlFor={fieldName}>{required && "*"}{labelText}</label>
)

export const InputText = ({ type = "text", placeholder, fieldName, labelText, register, control, required = true, minLength = 2, maxLength = 256 }) => {
    return (
        <div>
            <InputLabel
                fieldName={fieldName}
                labelText={labelText}
                required={required} />
            <input
                type={type}
                placeholder={placeholder || labelText}
                className="block w-full p-2 text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50         "
                {...register(fieldName, {
                    required,
                    minLength,
                    maxLength,
                })} />
            <FieldError
                fieldName={fieldName}
                required={required}
                control={control} />
        </div>
    )
};

export const InputEmail = ({ fieldName, labelText, register, required = true, minLength = 2, maxLength = 50, control }) => {
    return (
        <>
            <InputLabel
                fieldName={fieldName}
                labelText={labelText}
                required={required} />
            <input
                type='email'
                placeholder="reallygreat@gmail.com"
                className="block w-full p-2 text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50         "
                {...register(fieldName, {
                    required,
                    minLength,
                    maxLength,
                })} />
            <FieldError
                fieldName={fieldName}
                required={required}
                control={control} />
        </>
    )
};

export const InputPhone = ({ fieldName, labelText, register, control, required = true, minLength = 10, maxLength = 20 }) => {
    return (
        <div>
            <InputLabel
                fieldName={fieldName}
                labelText={labelText}
                required={required} />
            <input
                type='tel'
                placeholder="Format: (+57 ) 304-368-2547"
                className="block w-full p-2 text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50         "
                {...register(fieldName, {
                    required,
                    minLength,
                    maxLength,
                })} />
            <FieldError
                fieldName={fieldName}
                required={required}
                control={control} />
        </div>
    )
};

export const InputTextarea = ({ fieldName, labelText, register, control, required = true, minLength = 2, maxLength = 400 }) => {
    return (
        <div>
            <InputLabel
                fieldName={fieldName}
                labelText={labelText}
                required={required} />
            <textarea
                rows="3"
                className="block w-full p-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500             "
                {...register(fieldName, {
                    required,
                    minLength,
                    maxLength,
                })} />
            <FieldError
                fieldName={fieldName}
                required={required}
                control={control} />
        </div>
    )
};

export const getControlledFields = (fields) => (
    fields.map((field, index) => (
        <ControlledInputText key={`cit-${index}`}
            {...field} />
    ))
);