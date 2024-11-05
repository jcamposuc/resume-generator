import html2canvas from 'html2canvas';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileStorage } from '../../FileStorage';
import { Layout } from '../Layout';
import { previewTemplates } from '../../constants';

export const PreviewPage = () => {
    const [searchParams] = useSearchParams();
    const [info, setInfo] = useState(null);
    const [contentRef, pdgImage] = useHookWithRefCallback();
    const template = searchParams.get("tp");
    const PreviewTemplate = previewTemplates[template];

    useEffect(() => {
        const getData = async () => {
            const dataDraft = JSON.parse(localStorage.getItem(`draft-${searchParams.get("tp")}`) || {});

            const fileStorage = new FileStorage();
            await fileStorage.init();
            const files = await fileStorage.getAllFiles();
            setInfo({
                ...dataDraft,
                header_info: {
                    ...dataDraft?.header_info,
                    profilePicture: files?.length > 0 ? URL.createObjectURL(files[0].content) : null,
                },
            });
        }
        getData();
    }, [searchParams]);

    return (
        <Layout showWizard={false}>
            {
                info && (
                    <div className="grid grid-cols-6 text-left ">
                        <div className='col-span-6 lg:col-[2/6]'>
                            {
                                pdgImage ? (
                                    <img
                                        src={pdgImage}
                                        alt="pdf preview"
                                        className='w-full h-full px-3 md:px-0' />
                                ) : (
                                    <div style={{ minWidth: "768px" }}>
                                        <Skeleton />
                                        <PreviewTemplate info={info} contentRef={contentRef} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </Layout>
    );
};

const useHookWithRefCallback = () => {
    const ref = useRef(null);
    const [imageData, setImageData] = useState(null);

    const setRef = useCallback(node => {
        const convertToImage = async (node) => {
            const canvas = await html2canvas(node, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            setImageData(imgData);
        }

        if (node) {
            convertToImage(node)
        }

        ref.current = node
    }, [])

    return [setRef, imageData]
}

const Skeleton = () => (
    <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
    </div>
)