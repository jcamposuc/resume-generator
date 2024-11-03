const FieldSetLayout = ({ legend, children }) => {
    return (
        <fieldset className='grid grid-cols-2 gap-2 p-5 mb-3 border rounded-sm shadow-md'>
            <legend className='mr-auto font-semibold uppercase'>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default FieldSetLayout;