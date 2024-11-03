import phoneIcon from '../../images/phone-icon.png';
import emailIcon from '../../images/email-icon.png';
import locationIcon from '../../images/location-icon.png';
import siteIcon from '../../images/site-icon.png';
import defaultProfilePicture from '../../images/template1-profile.webp';

const { DEFAULT_SKILLS, DEFAULT_EXPERIENCES, DEFAULT_EDUCATION } = require("../../constants");

const Circle = () => (
    <div className='absolute z-10 bg-white border rounded-full -bottom-1' style={{ width: "4px", height: "4px", padding: "4px", right: "-0.35rem" }} />
)

const ContactInfoIcon = ({ src, alt }) => <img src={src} alt={alt} className='inline-block w-5 h-5' />

const SectionTitle = ({ title }) => <h3 className='text-xl leading-3 uppercase mb-7'>{title}</h3>;

export const Institution = ({ position, company, date }) => (
    <>
        <h4 className='mb-1 font-bold uppercase'>{position}</h4>
        <div className='mb-1 font-extralight'>{company}</div>
        <div className='mb-1'>{date}</div>
    </>
);

export const Job = ({ position, company, date, responsabilities }) => {
    return (
        <>
            <Institution position={position} company={company} date={date} />
            <ul className='list-none list-inside'>
                {
                    responsabilities.map((responsability, index) => (
                        <li className='pl-1' key={`respon${index}`}>- {responsability}</li>
                    ))
                }
            </ul>
        </>
    )
}

const Header = ({ name, lastName, occupation, profilePicture }) => (
    <header className={`relative p-2 px-10 bg-slate-100`}>
        <div className="relative flex justify-between overflow-y-visible">
            <div className="content-center uppercase">
                <h1 className={`text-4xl`} style={{ letterSpacing: 8 }}>{name || "Dani"} <span className='font-extrabold'>{lastName || "Schwaiger"}</span></h1>
                <h2 className='mt-3 text-xl' style={{ letterSpacing: 8 }}>{occupation || "Web Developer"}</h2>
            </div>
            <img
                src={profilePicture || defaultProfilePicture}
                width={150}
                height={150}
                alt="profile"
                className='relative z-50 top-12' />
        </div>
    </header>
)

const ContactInformation = ({ phone, email, address, website }) => (
    <section className='relative content-center p-3 pt-0 border-b border-r border-slate-400'>
        <div className='mb-2'>
            <ContactInfoIcon src={phoneIcon} alt="phone" />
            <span className='relative inline-block h-5 ml-1 bottom-2'>{phone || "123-456-7890"}</span>
        </div>
        <div className='flex items-center mb-2'>
            <ContactInfoIcon src={emailIcon} alt="phone" />
            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{email || "junior.uc.9192@gmail.com"}</span>
        </div>
        <div className='flex items-center mb-2'>
            <ContactInfoIcon src={locationIcon} alt="phone" />
            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{address || "123 Anywhere St., Any City"}</span>
        </div>
        <div className='flex items-center'>
            <ContactInfoIcon src={siteIcon} alt="phone" />
            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{website || "reallygreatsite.com"}</span>
        </div>
        <Circle />
    </section>
)

const ProfileInfo = ({ aboutMe }) => (
    <section className='col-span-2 p-3 pt-0 border-b border-slate-400'>
        <SectionTitle title="Profile" />
        <p className='text-justify'>
            {aboutMe || "I am a qualified and professional web developer with five years of experience in database administrtion and website design. Strong creative and analytical skills. Team player with an eye for detail."}
        </p>
    </section>
)

const Skills = ({ skills = DEFAULT_SKILLS }) => (
    <section className='relative p-3 border-b border-r pb-7 border-slate-400'>
        <SectionTitle title="Skills" />
        <ul className="list-none list-inside">
            {
                skills?.map((skill, index) => (
                    <li key={`skill-${index}`} className='mb-3'>
                        - {skill}
                    </li>
                ))
            }
        </ul>
        <Circle />
    </section>
)

const Experiences = ({ experiences = DEFAULT_EXPERIENCES }) => (
    <section className='col-span-2 col-start-2 p-3'>
        <SectionTitle title="experience" />
        {
            experiences?.map((experience, index) => (
                <div key={`experience=${index}`} className='mb-5'>
                    <Job
                        {...experience}
                    />
                </div>
            ))
        }
    </section>
)

const Education = ({ education = DEFAULT_EDUCATION }) => (
    <section className='row-span-2 p-3 border-r border-slate-400'>
        <SectionTitle title="education" />
        {
            education?.map((edu, index) => (
                <div key={`edu=${index}`} className='mb-5'>
                    <Institution
                        {...edu} />
                </div>
            ))
        }
    </section>
)

export const Template1 = {
    Header,
    ContactInformation,
    ProfileInfo,
    Skills,
    Experiences,
    Education,
}