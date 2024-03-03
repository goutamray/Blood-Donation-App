
/**
 * 
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const errorHandler = (error, req, res, next) => {
  // find status code 
  const status = res.statusCode ? res.statusCode : 500;
  
  // send error message 
  return res.status(status).json({ message : error.message});
}; 











