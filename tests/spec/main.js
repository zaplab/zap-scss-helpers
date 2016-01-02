
const sassTrue = require('sass-true');
const path = require('path');

const sassFile = path.join(__dirname, 'main.scss');

sassTrue.runSass({
    file: sassFile,
    includePaths: [
        'src/libs/bower',
    ],
}, describe, it);
