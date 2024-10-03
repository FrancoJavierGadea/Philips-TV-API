import { shutdown } from "./http-requests/shutdown.js";
import { getName, getSystemInfo } from "./http-requests/system-info.js";
import { volumeDown, volumeMute, volumeUp } from "./http-requests/volume.js";

const TV_IP = '192.168.100.83';
const PORT = 1925;
const url = `http://${TV_IP}:${PORT}`;

const KEYS = {
    CTRL_C: '\u0003',
    ARROW_UP: '\u001b[A',
    ARROW_DOWN: '\u001b[B',
    ARROW_LEFT: '\u001b[D',
    ARROW_RIGHT: '\u001b[C',
    SPACE: ' '
};

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf-8');

const KEYS_MAP = {
    "Get Information": "I",
    "Get Name": "N",
    "Volume Up": "↑",
    "Volume Down": "↓",
    "Mute": "M",
    "Shutdown": "X",
    "Exit": "CTRL + C"
};

Object.entries(KEYS_MAP).forEach(([key, value]) => {

    console.log(`${key}: '${value}'`);
});

console.log('\nListening...')

process.stdin.addListener('data', (key) => {

    switch (key) {

        case KEYS.CTRL_C:
            
            process.exit();
            break;
    
        case KEYS.ARROW_UP:
            volumeUp({url});
            break;

        case KEYS.ARROW_DOWN:
            volumeDown({url});
            break;

        case 'm':
        case 'M':
            volumeMute({url});
            break;

        case 'x':
        case 'X':
            shutdown({url});

        case 'n':
        case 'N':
            getName({url});
            break;

        case 'i':
        case 'I':
            getSystemInfo({url});
            break;
    }

});