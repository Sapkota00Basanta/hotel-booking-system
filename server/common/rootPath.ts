//Built-in Modules
import path from "path";

const rootDir = path.dirname(process.mainModule!.filename); // Adding ! after an object property specifies that it can't be undefined
export default rootDir;
