import { useFormContext } from "react-hook-form";
import { InputText } from "../../utilities";
import { FileStorage } from "../../FileStorage";
import FieldSetLayout from "./FieldSetLayout";

export const HeaderInfoInputs = ({ children }) => {
    const { watch, setValue, register, control } = useFormContext();
    const profilePicture = watch('header_info.profilePicture');

    return (
        <FieldSetLayout legend="Header Information">
            <div className='col-span-2'>
                {
                    profilePicture ? (
                        <ProfilePicture
                            profilePicture={profilePicture}
                            setValue={setValue} />
                    ) : (
                        <UploadPhoto setValue={setValue} />
                    )
                }
            </div>
            <InputText
                fieldName="header_info.name"
                labelText="Name"
                register={register}
                control={control} />
            <InputText
                fieldName="header_info.lastName"
                labelText="Last Name"
                register={register}
                control={control} />
            <div className='col-span-2'>
                <InputText
                    fieldName="header_info.occupation"
                    labelText="Occupation"
                    register={register}
                    control={control} />
            </div>
            {children}
        </FieldSetLayout>
    );
};

const ProfilePicture = ({ profilePicture, setValue }) => {
    const removePhoto = async () => {
        setValue("header_info.profilePicture", null);
        const fileStorage = new FileStorage();
        await fileStorage.init();
        await fileStorage.deleteAllFiles();
    }

    return (
        <figure className="relative m-auto transition-all duration-300 w-36 h-36 filter grayscale hover:grayscale-0">
            <img
                className="object-contain rounded-full hover:object-scale-down w-36 h-36"
                src={profilePicture}
                alt="profile" />
            <figcaption className="absolute bottom-0 px-4 text-white left-5 hover:text-slate-800">
                <button
                    className="px-3 mb-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-sm me-2 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100            "
                    onClick={removePhoto}>Remove</button>
            </figcaption>
        </figure>
    )
}

const UploadPhoto = ({ setValue }) => {
    const handleUploadFile = async (evnt) => {
        const file = evnt.target.files[0];
        const urlImage = URL.createObjectURL(file);
        setValue("header_info.profilePicture", urlImage);
        const fileStorage = new FileStorage();
        await fileStorage.init();
        await fileStorage.saveFile(file);
    }

    return (
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center m-auto border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50    hover:bg-gray-100       w-36 h-36">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <svg className="w-8 h-8 mb-2 text-gray-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500  "><span className="font-semibold">Click to upload</span></p>
                <p className="text-xs text-gray-500  ">SVG, PNG or JPG (Recommended 150x150)</p>
            </div>
            <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleUploadFile} />
        </label>
    )
}
