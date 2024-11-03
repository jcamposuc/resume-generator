import { Link } from 'react-router-dom';

export const CardTemplate = ({ imgSrc, path, disabled }) => {
    return (
        <Link
            to={path}
            className="inline-flex flex-col items-center object-cover mx-auto bg-white border border-gray-200 rounded-sm shadow xl:mx-0 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
                className="object-cover w-full rounded-t-sm xs:h-auto md:h-96 md:w-full md:rounded-none md:rounded-s-sm"
                src={imgSrc} alt={`template`} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 text-md dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </Link>
    );
};