import { Config } from "@src/model/common/Config";

export const FileListToArr = (files: FileList) => {
    const data: any = [];
    Object.keys(files).filter((idx: any) => {
        data.push(files[idx]);
    });

    return data;
};

export const checkFileType = (files: FileList, mimeType: Array<string>) => {
    const dataTranster = new DataTransfer();
    Object.keys(files).filter((idx: any) => {
        let typeCheck = false;
        mimeType.map(type => {
            if (files[idx].type === type) typeCheck = true;
        });
        if (typeCheck) dataTranster.items.add(files[idx]);

        // Error Exception
        if (!typeCheck) {
            return alert(`파일 확장자를 확인하세요.\r${files[idx].name}`);
        }
    });

    return dataTranster.files;
};

export const checkFileSize = (files: FileList, fileSize: number) => {
    const dataTranster = new DataTransfer();
    Object.keys(files).map((idx: any) => {
        if (files[idx].size <= fileSize) dataTranster.items.add(files[idx]);

        // Error Exception
        if (files[idx].size > fileSize) {
            alert(`이미지 파일 크기가 5mb를 초과 했습니다.\r${files[idx].name}\rfileSize : ${files[idx].size} byte`);
        }
    });
    return dataTranster.files;
};

export const checkFilesHandler = (files: FileList): FileList => {
    files = checkFileType(files, Config.mimeType.contents);
    files = checkFileSize(files, Config.fileSize.imgs);

    return files;
};
