const fs = require('fs');
const path = require('path');

module.exports = function (context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/ios');
    const files = fs.readdirSync(platformRoot);
    const projectName = files.find(f => fs.existsSync(path.join(platformRoot, f, 'Classes', 'AppDelegate.m')));
    const appDelegatePath = path.join(platformRoot, projectName, 'Classes', 'AppDelegate.m');

    if (!fs.existsSync(appDelegatePath)) return;

    let content = fs.readFileSync(appDelegatePath, 'utf8');

    const importLine = '#import "ios/AppDelegateCustomURL.m"';
    if (!content.includes(importLine)) {
        content = content.replace('#import "AppDelegate.h"', `#import "AppDelegate.h"\n${importLine}`);
        fs.writeFileSync(appDelegatePath, content, 'utf8');
        console.log('[CustomURLHandler] Patched AppDelegate.m');
    }
};
