import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useInitializeDraft } from '../../hooks/useInitializeDraft';
import { AboutMeInputs } from '../Common/AboutMeInputs';
import { ContactInformationInputs } from '../Common/ContactInformationInputs';
import { EducationInputs } from '../Common/EducationInputs';
import { ExperiencesInputs } from '../Common/ExperiencesInputs';
import { HeaderInfoInputs } from '../Common/HeaderInfoInputs';
import { SkillsInputs } from '../Common/SkillsInputs';
import { Layout } from '../Layout';
import { SaveDraftButton } from '../SaveDraftButton';
import { previewTemplates } from '../../constants';
import { LanguageInputs } from '../Common/LanguageInputs';

export const CreatorTemplate1 = () => {
    const formMethods = useForm();
    const navigate = useNavigate();
    const { handleSubmit, watch, reset } = formMethods;
    useInitializeDraft(reset);
    const [searchParams] = useSearchParams();
    const template = searchParams.get("tp");
    const PreviewTemplate = previewTemplates[template];

    const onSubmit = (values) => {
        localStorage.setItem(`draft-${template}`, JSON.stringify(values));
        navigate(`/download?tp=${template}`);
    }

    const goToPreview = () => {
        localStorage.setItem(`draft-${template}`, JSON.stringify(allValues));
        navigate(`/preview?tp=${template}`);
    }

    const allValues = watch();

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-4 text-left">
                <FormProvider {...formMethods}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='col-span-2 mx-2 xl:col-span-1 xl:mx-0'>
                        <HeaderInfoInputs />
                        <ContactInformationInputs />
                        <AboutMeInputs />
                        <SkillsInputs />
                        <ExperiencesInputs />
                        <EducationInputs />
                        {
                            template === "tp-2" && (
                                <LanguageInputs />
                            )
                        }
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-6 py-4 mt-3 ml-auto mr-3 text-sm font-medium text-white rounded-sm md:justify-start md:py-2 md:w-auto bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300      "
                        >
                            <svg className="w-4 h-4 text-white-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z" />
                                <path fillRule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.707 5.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                            </svg>
                            DONE!
                        </button>
                        <SaveDraftButton />
                        <button
                            type='button'
                            onClick={goToPreview}
                            className='inline-flex items-center justify-center w-full px-6 py-4 ml-0 text-sm font-medium text-white uppercase rounded-sm md:justify-start md:w-auto md:px-5 md:py-2 md:ml-3 bg-stone-500 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300     focus:outline-none  '>
                            <svg className="inline-flex items-center w-4 h-4 text-white-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                            </svg>
                            Go to Preview
                        </button>
                    </form>
                </FormProvider>
                <section className='hidden xl:block'>
                    <PreviewTemplate info={allValues} />
                </section>
            </div>
        </Layout>
    );
};