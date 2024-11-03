import { InputEmail, InputPhone, InputText } from '../../utilities';
import { useFormContext } from 'react-hook-form';
import FieldSetLayout from './FieldSetLayout';

export const ContactInformationInputs = ({ children }) => {
    const { register, control } = useFormContext();

    return (
        <FieldSetLayout legend="Contact Information">
            <InputPhone
                fieldName="contact_info.phone"
                labelText="Phone"
                register={register}
                control={control} />
            <div className='items-start content-start justify-start'>
                <InputEmail
                    fieldName="contact_info.email"
                    labelText="Email"
                    register={register}
                    control={control} />
            </div>
            <InputText
                fieldName="contact_info.address"
                labelText="Address"
                register={register}
                control={control} />
            <InputText type='url'
                placeholder="http://www.example.com"
                fieldName="contact_info.website"
                labelText="Website, blog or linkedin"
                register={register}
                required={false}
                control={control} />
            {children}
        </FieldSetLayout>
    );
};