import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FileStorage } from "../FileStorage";

export const useInitializeDraft = (reset) => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const getData = async () => {
            const dataDraft = JSON.parse(localStorage.getItem(`draft-${searchParams.get("tp")}`)) || {};
            const fileStorage = new FileStorage();
            await fileStorage.init();
            const files = await fileStorage.getAllFiles();
            const profilePicture = files.length > 0 ? URL.createObjectURL(files[0].content) : null;
            reset({
                ...dataDraft,
                header_info: {
                    ...dataDraft.header_info,
                    profilePicture,
                },
            });
        }
        getData();
    }, [searchParams, reset]);

    return null;
}