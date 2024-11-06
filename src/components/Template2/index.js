import defaultProfilePicture from '../../images/template1-profile.webp';
import { DEFAULT_EDUCATION, DEFAULT_EXPERIENCES, DEFAULT_LANGUAGES, DEFAULT_SKILLS } from "../../constants";

const DivisorLine = ({ color = "bg-gray-300", height = "h-px" }) => (
    <hr class={`${height} mt-4 ${color} rounded-sm w-full`}></hr>
)

const SectionTitle = ({ title, hasLine = true }) => (
    <div className='flex mb-4'>
        <h3 className='mr-3 text-xl leading-3 uppercase'>{title}</h3>
        {hasLine && <hr class="h-0.5 bg-stone-500 rounded-sm w-full mt-4" />}
    </div>
)

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
    <header className={`pt-6 col-span-3 absolute w-full`}>
        <div className="relative p-6 bg-cyan-700">
            <div className="relative text-gray-100 uppercase -top-3">
                <h1 className={`text-4xl font-extrabold`} style={{ letterSpacing: 4 }}>{name || "Dani"}{" "}{lastName || "Schwaiger"}</h1>
                <h2 className='mt-3 text-xl' style={{ letterSpacing: 4 }}>{occupation || "Graphic Designer"}</h2>
            </div>
            <img
                src={profilePicture || defaultProfilePicture}
                width={150}
                height={150}
                alt="profile"
                className='absolute bg-white border-4 border-white rounded-full -top-2 right-6' />
        </div>
    </header>
)

const ContactInformation = ({ phone, email, address, website }) => (
    <section className='relative content-center p-3 pt-0'>
        <div className='mb-2'>
            <svg class="w-6 h-6 text-white-800 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
            <span className='relative inline-block h-5 ml-1 bottom-2'>{phone || "123-456-7890"}</span>
        </div>
        <div className='flex items-center mb-2'>
            <svg class="inline-block w-6 h-6 text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
            </svg>
            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{email || "junior.uc.9192@gmail.com"}</span>
        </div>
        <div className='flex items-center mb-2'>
            <svg class="w-6 h-6 text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
            </svg>
            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{address || "123 Anywhere St., Any City"}</span>
        </div>
        <div className='flex items-center'>
            <svg class="w-6 h-6 text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
            </svg>

            <span className='relative flex items-center h-5 ml-1 leading-5 bottom-2'>{website || "reallygreatsite.com"}</span>
        </div>
        <DivisorLine />
    </section>
)

const ProfileInfo = ({ aboutMe }) => (
    <section className='col-span-2 p-3 pt-0 mb-4'>
        <SectionTitle title="Profile" />
        <p className='text-justify'>
            {aboutMe || "I am a qualified and professional web developer with five years of experience in database administrtion and website design. Strong creative and analytical skills. Team player with an eye for detail."}
        </p>
    </section>
)

const Skills = ({ skills = DEFAULT_SKILLS }) => (
    <section className='relative p-3 pb-7'>
        <SectionTitle title="Skills" hasLine={false} />
        <ul className="pl-3 list-none list-inside">
            {
                skills?.map((skill, index) => (
                    <li key={`skill-${index}`} className='mb-3'>
                        - {skill}
                    </li>
                ))
            }
        </ul>
        <DivisorLine />
    </section>
)

const Languages = ({ languages = DEFAULT_LANGUAGES }) => (
    <section className='relative p-3 pb-7'>
        <SectionTitle title="Languages" hasLine={false} />
        <ul className="pl-3 list-none list-inside">
            {
                languages?.map((language, index) => (
                    <li key={`language-${index}`} className='mb-3'>
                        <span>- {language}</span>
                    </li>
                ))
            }
        </ul>
    </section>
)

const Experiences = ({ experiences = DEFAULT_EXPERIENCES }) => (
    <section className='col-span-2 p-3'>
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
    <section className='p-3'>
        <SectionTitle title="education" />
        {
            education?.map((edu, index) => (
                <div key={`edu=${index}`} className='mb-4'>
                    <Institution
                        {...edu} />
                </div>
            ))
        }
    </section>
)

export const Template2 = {
    Header,
    ContactInformation,
    ProfileInfo,
    Skills,
    Experiences,
    Education,
    Languages,
}