
const sassTrue = require('sass-true');
const path = require('path');

const sassFile = path.join(__dirname, 'main.scss');

sassTrue.runSass({
    file: sassFile,
    includePaths: [
        'node_modules',
    ],
}, describe, it);
