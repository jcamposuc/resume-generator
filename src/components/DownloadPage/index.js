import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { PreviewTemplate1 } from '../PreviewTemplate1';
import { Layout } from '../Layout';
import { FileStorage } from '../../FileStorage';
import { DownloadPdfButton } from '../DownloadPdfButton';

export const DownloadPage = () => {
    const [searchParams] = useSearchParams();
    const [info, setInfo] = useState(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            const dataDraft = JSON.parse(localStorage.getItem(`draft-${searchParams.get("tp")}`));

            const fileStorage = new FileStorage();
            await fileStorage.init();
            const files = await fileStorage.getAllFiles();
            setInfo({
                ...dataDraft,
                header_info: {
                    ...dataDraft.header_info,
                    profilePicture: URL.createObjectURL(files[0].content),
                },
            });
        }
        getData();
    }, [searchParams]);

    return (
        <Layout>
            {
                !info ? (
                    <></>
                ) : (
                    <div className="grid grid-cols-6 gap-4 text-left">
                        <section className='col-[2/6] xl:col-span-2'>
                            <DownloadPdfButton contentRef={contentRef} />
                        </section>
                        <section className='hidden col-span-4 text-left xl:block'>
                            <PreviewTemplate1 info={info} contentRef={contentRef} />
                        </section>
                    </div>
                )
            }
        </Layout>
    );
};