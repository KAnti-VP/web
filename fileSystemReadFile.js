let fileHandle;

async function getFileContent() {
    const pickerOpts = {
        types: [
            {
                description: "Images",
                accept: {
                    "image/*": [".png", ".gif", ".jpeg", ".jpg"],
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
    };

    // open file picker
    //const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    const [fileHandle] = await window.showOpenFilePicker();

    // get file contents
    const fileData = await fileHandle.getFile();
    let text = await fileData.text();
    console.log(text);

    textarea.innerText = text;

}

async function writeFile(fileHandle) {
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();

    // Write the contents of the file to the stream.
    console.log(textarea.innerText)
    //await writable.write(textarea.innerText);

    // Close the file and write the contents to disk.
    await writable.close();
}

save = async () => {
    //await writeFile(fileHandle);


    let myFile = new File(
        [textarea.innerText], 
        "jacson.json", 
    {type: "text/plain; charset=utf8"})
    saveAs(myFile)
}