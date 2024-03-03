
/**
 * 
 * generate page title from path 
 */

export const generatePathName = (path) => {
   const title = path.replace(/-/g, " ").replace(/\//, ""); 
   return title; 
}











