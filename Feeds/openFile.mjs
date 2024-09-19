import { open, close, readFile } from 'node:fs';

function readMyData(fd) {
    readFile(fd, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log("File data:", data);
        // Close the file descriptor after reading the data
        close(fd, err => {
            if (err) throw err;
        });
    });
}



open('./Feeds.json', 'r', (err, fd) => {
    if(err) {
        if(err.code === 'ENOENT')  {
         console.log("The file does not exist");
         return;
        }
        throw err;
    }
   try {
        readMyData(fd);
   } finally {
        close(fd, err => {
            if(err) throw err;
        })
   }

})