//check the access of the file - promises
// import { access, constants } from 'fs/promises';
// import { clearScreenDown } from 'readline';

// try {
//     await access('./Feeds.json', constants.F_OK);
//     console.log('can access')
// } catch(err) {
//     console.log(err)
// }

//check the access of the file - callback API

import { access, constants } from 'fs';

const FileName = "./Feeds.json";

access(FileName, constants.F_OK, (error) =>{
    console.log(`${FileName} ${error ? 'does not exist' : 'does exist'}`)
} )

access(FileName, constants.R_OK, (error) => {
    console.log(`${FileName} ${error ? 'file is not readble': 'file is readable'}`)
})