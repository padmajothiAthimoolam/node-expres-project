import { copyFile, constants } from "fs/promises";

try {
    await copyFile('./Feeds.json', './FeedCopy.json', constants.COPYFILE_EXCL) //constants.COPYFILE_EXCL throw erro if the detstination exists  
} catch(err) {
    console.log("Not able to copy")
}
