export const FileListToArr = (files: FileList) => {
    const data: any = [];
    Object.keys(files).filter((idx: any) => {
        data.push(files[idx]);
    });

    return data;
};

export const checkFileType = (files: FileList, mimeType: Array<string>) => {
    const data: any = [];
    Object.keys(files).filter((idx: any) => {
        let typeCheck = false;
        mimeType.map(type => {
            if (files[idx].type === type) typeCheck = true;
        });
        if (typeCheck) data.push(files[idx]);
    });

    return data;
};
