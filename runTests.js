const assert = require('assert');
const fs = require('fs');
const path = require('path');

// function runTests() {
//     const testDir = path.join(__dirname, 'test');
//     const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js') || fs.statSync(path.join(testDir, file)).isDirectory());

//     testFiles.forEach(file => {
//         console.log(`Running ${file}...`);
//         require(path.join(testDir, file));
//     });

//     console.log('All tests finished.');
// }


 
function runTests() {
    const testDir = path.join(__dirname, 'test');
    const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js') || fs.statSync(path.join(testDir, file)).isDirectory());

    testFiles.forEach(file => {
        const filePath = path.join(testDir, file);
        if (fs.statSync(filePath).isDirectory()) {
            const subFiles = fs.readdirSync(filePath).filter(subFile => subFile.endsWith('.test.js'));
            subFiles.forEach(subFile => {
                console.log(`Running ${subFile}...`);
                try {
                    require(path.join(filePath, subFile));
                } catch (error) {
                    console.error(`Error in ${subFile}:`, error);
                }
            });
        } else {
            console.log(`Running ${file}...`);
            try {
                require(filePath);
            } catch (error) {
                console.error(`Error in ${file}:`, error);
            }
        }
    });

    console.log('All tests finished.');
}


runTests();
