// delete the file - Promises
import { unlink } from 'fs/promises';

try {
    await unlink('./Feeds.json');

} catch(error) {
    console.log(error)
}

// delete the file callback

unlink('./Feeds.json', (error) => {
    if (error) throw new error;
    console.log("File deleted successfully")
}) 