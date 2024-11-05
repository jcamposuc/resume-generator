import { PIXELS_LETTER_SIZE } from "../../constants";
import { Template2 } from "../Template2";

const PreviewTemplate2 = ({ info, contentRef }) => {
    const { header_info, contact_info, about_me, skills, experiences, educations, languages } = info;

    const profilePicture = header_info?.profilePicture;

    return (
        <div id="section-template" className='relative font-serif text-xs font-light' ref={contentRef}>
            <div className={`grid grid-cols-3 min-h-[${PIXELS_LETTER_SIZE}]`}>
                <Template2.Header
                    name={header_info?.name}
                    lastName={header_info?.lastName}
                    occupation={header_info?.occupation}
                    profilePicture={profilePicture} />
                <div className="text-gray-300 pt-44 bg-cyan-950">
                    <Template2.ContactInformation
                        address={contact_info?.address}
                        email={contact_info?.email}
                        phone={contact_info?.phone}
                        website={contact_info?.website} />
                    <Template2.Skills
                        skills={skills} />
                    <Template2.Languages languages={languages} />
                </div>
                <div className="col-span-2 pt-44 bg-slate-100">
                    <Template2.ProfileInfo
                        aboutMe={about_me?.profile} />
                    <Template2.Education
                        education={educations?.map((ed) => ({
                            position: ed.grade,
                            company: ed.institute,
                            date: ed.endDate,
                        }))} />
                    <Template2.Experiences
                        experiences={experiences} />
                </div>
            </div>
        </div>
    );
};

export default PreviewTemplate2;

