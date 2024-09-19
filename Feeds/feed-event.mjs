import { getLinks, saveLinks } from './feed-manager.mjs';
import { EventEmitter } from 'events';
import axios from 'axios';
import Parser from 'rss-parser';
import { rl, close } from './rl.mjs';

const feeds = await getLinks();
const parser = new Parser();
const emitter = new EventEmitter();

function prompt() {
    rl.setPrompt(" Enter command list, add, del, read, quit:");
    rl.prompt();
}

rl.on('line', (input) => {
    let cmdParts = input.trim().split(' ');
    emitter.emit(cmdParts[0], cmdParts[1]);
})

emitter.on('quit', async () => {
    await saveLinks(feeds);
    close();
})

emitter.on('list', async() => {
    feeds.forEach((url, index) => console.log(`${index} ]t ${url}`));
    prompt();
})
emitter.on('add', async(url) => {
    if(url == undefined) {
        console.log('Please include url with the add command')
    } else {
        feeds.push(url);
    }
    prompt();
})

emitter.on('del', async(index) => {
    if(index == undefined) {
        console.log('please include the index of the URL to delete');
    } else {
        index = parseInt(index, 10);

        if(index > -1 && index < feeds.length) {
            feeds.splice(index, 1);
        } else {
            console.log('The provide index is out of range');
        }
    }

    prompt();
})

emitter.on('read', async(index) => {
    if(index == undefined) {
        console.log('please include the index of the URL to read');
    } else {
        index = parseInt(index, 10);

        if(index > -1 && index < feeds.length) {
            let { data } = await axios.get(feeds[index])
            let feed = await parser.parseString(data);
            feed.items.forEach(item => console.log(item.title));
        } else {
            console.log('The provide index is out of range');
        }
    }

    prompt();
})
prompt();
// rl.on('list', )
