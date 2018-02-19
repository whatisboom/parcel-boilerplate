const fs = require('fs');
const path = require('path');

/* global process */
const newPackage = process.argv[2];
const dest = path.resolve(`../${newPackage}`);
const blacklist = fs.readFileSync('./.gitignore', 'utf-8').split('\n');
blacklist.push('clone.js', '.git');

const parseAndRenameList = [
  'package.json'
];

function copyFileSync( source, target ) {

  const exists = blacklist.indexOf(path.basename( source )) !== -1;

  if (exists) {
    return;
  }

  let targetFile = target;

  // if target is a directory a new file with the same name will be created
  if ( fs.existsSync( target ) ) {
    if ( fs.lstatSync( target ).isDirectory() ) {
      targetFile = path.join( target, path.basename( source ) );
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync( source, target ) {

  const exists = blacklist.indexOf(path.basename( source )) !== -1;

  if (exists) {
    return;
  }

  const targetFolder = path.join( target, path.basename( source ) );
  if ( !fs.existsSync( targetFolder ) ) {
    fs.mkdirSync( targetFolder );
  }

  if ( fs.lstatSync( source ).isDirectory() ) {
    const files = fs.readdirSync( source );
    files.forEach(( file ) => {
      const curSource = path.join( source, file );
      if ( fs.lstatSync( curSource ).isDirectory() ) {
        copyFolderRecursiveSync( curSource, targetFolder );
      } else {
        copyFileSync( curSource, targetFolder );
      }
    } );
  }
}

function renamePackage(file, name) {
  fs.readFile(file, 'utf8', (err,data) => {
    if (err) {
      return;
    }
    const pattern = new RegExp('"parcel-boilerplate"', 'g');
    const result = data.replace(pattern, `"${name}"`);

    fs.writeFile(file, result, 'utf8', (err) => {
       if (err) {
         return;
       }
    });
  });
}

copyFolderRecursiveSync('.', dest);

parseAndRenameList.forEach((item) => {
  const file = path.resolve(`${dest}/${item}`);
  renamePackage(file, newPackage);
});
