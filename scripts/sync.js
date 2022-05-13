const { resolve, parse, join } = require("path");
const { readdirSync, writeFileSync, readFileSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

/**
 * Generates a corresponding the base64 string in a .js file for each Wojak .png image
 */
const sync = () => {
  console.log("Generating base64 files...");

  const rootPath = resolve(__dirname, "../public/wojaks");
  const wojakDirs = getDirectories(rootPath);

  wojakDirs.forEach((w) => {
    const subfilePath = resolve(rootPath, w);
    const pngFiles = readdirSync(subfilePath).filter((name) =>
      /^.*\.(png|PNG)$/.test(name)
    );

    pngFiles.forEach((file) => {
      const wojakFilePng = resolve(subfilePath, file);
      const fileBuffer = readFileSync(wojakFilePng);
      const encoded = fileBuffer.toString("base64");
      const data = `export default '${encoded}';`;
      const wojakFileJs =
        join(parse(wojakFilePng).dir, parse(wojakFilePng).name) + ".js";
      writeFileSync(wojakFileJs, data);
      console.log("converted:", wojakFilePng, "=>", wojakFileJs);
    });
  });

  console.log("Finished!\n");
};

sync();
