import styled from "styled-components";
import { Template2 } from "../Template2";

const StyledSidebar = styled.div`
  background-color: ${props => props.sidebar_bg};
  color: ${props => props.sidebar_text_color};
`;

const StyledBody = styled.div`
  background-color: ${props => props.body_bg};
`;

const PreviewTemplate2 = ({ info, contentRef }) => {
    const { header_info, contact_info, about_me, skills, experiences, educations, languages, theme_color } = info;

    const profilePicture = header_info?.profilePicture;

    return (
        <div id="section-template" className='sticky top-0 font-serif text-xs font-light' ref={contentRef}>
            <div className={`grid grid-cols-3 min-h-[1056px]`}>
                <Template2.Header
                    name={header_info?.name}
                    lastName={header_info?.lastName}
                    occupation={header_info?.occupation}
                    profilePicture={profilePicture}
                    themeColor={theme_color} />
                <StyledSidebar
                    className="pt-44"
                    sidebar_bg={theme_color.sidebar_bg}
                    sidebar_text_color={theme_color.sidebar_text_color}>
                    <Template2.ContactInformation
                        address={contact_info?.address}
                        email={contact_info?.email}
                        phone={contact_info?.phone}
                        website={contact_info?.website}
                        themeColor={theme_color} />
                    <Template2.Skills
                        skills={skills} />
                    <Template2.Languages languages={languages} />
                </StyledSidebar>
                <StyledBody
                    body_bg={theme_color.body_bg}
                    className={`col-span-2 pt-44`}>
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
                </StyledBody>
            </div>
        </div>
    );
};

export default PreviewTemplate2;

