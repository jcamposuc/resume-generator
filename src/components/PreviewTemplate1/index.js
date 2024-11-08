import { Template1 } from '../Template1';

export const PreviewTemplate1 = ({ info, contentRef }) => {
    const { header_info, contact_info, about_me, skills, experiences, educations, theme_color } = info;

    const profilePicture = header_info?.profilePicture;

    return (
        <div id="section-template" className='sticky top-0 font-serif text-xs font-light' ref={contentRef}>
            <Template1.Header
                name={header_info?.name}
                lastName={header_info?.lastName}
                occupation={header_info?.occupation}
                profilePicture={profilePicture}
                themeColor={theme_color}
            />
            <div className='grid grid-cols-3 mt-10 px-7'>
                <Template1.ContactInformation
                    address={contact_info?.address}
                    email={contact_info?.email}
                    phone={contact_info?.phone}
                    website={contact_info?.website} />
                <Template1.ProfileInfo
                    aboutMe={about_me?.profile} />
                <Template1.Skills
                    skills={skills} />
                <Template1.Experiences
                    experiences={experiences} />
                <Template1.Education
                    education={educations?.map((ed) => ({
                        position: ed.grade,
                        company: ed.institute,
                        date: ed.endDate,
                    }))} />
            </div>
        </div>
    );
};

