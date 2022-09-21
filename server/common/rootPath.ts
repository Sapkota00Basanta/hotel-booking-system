//Built-in Modules
import path from "path";

/* Here the root dir will be the path where the main index file is present for instance
 here it is server folder */
const rootDir = path.dirname(process.mainModule!.filename); // Adding ! after an object property specifies that it can't be undefined
export default rootDir;
