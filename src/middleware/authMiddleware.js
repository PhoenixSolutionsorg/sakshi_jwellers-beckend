import jwt from '../services/jwt';
import accountRepository from '../repositories/account-repository';
import httpStatus from 'http-status';
const authValidateRequest = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      const parts = req.headers.authorization.split('@');
      const unauthorizedError = httpStatus.status('UNAUTHORIZED');
      if (parts.length === 2) {
        const scheme = parts[0];
        const token = parts[1];
        if (/^Foundation$/i.test(scheme)) {
          const decodedToken = jwt.verifyToken(token);
          if (decodedToken) {
            const user = await accountRepository.findOne({token});
            if (user) {
              if (user?.token) {
                req.user = user;
                req.userToken = user?.token;
                next();
              } else {
                const error = new Error('TOKEN_BAD_FORMAT');
                error.status = unauthorizedError;
                error.message = (
                  req,
                  false,
                  'SESSION_EXPIRE'
                );
                next(error);
              }
            } else {
              const error = new Error();
              error.status = unauthorizedError;
              error.message = (
                req,
                false
              );
              next(error);
            }
          } else {
            const error = new Error('TOKEN_NOT_FOUND');
            error.status = utility.httpStatus('BAD_REQUEST');
            error.message = (
              req,
              false,
              'UNAUTHORIZED_USER_ACCESS'
            );
            next(error);
          }
        } else {
          const error = new Error('TOKEN_BAD_FORMAT');
          error.status = unauthorizedError;
          error.message = (req, false, 'SESSION_EXPIRE'); // 'Format is Authorization: Bearer [token]';
          next(error);
        }
      } else {
        const error = new Error('TOKEN_BAD_FORMAT');
        error.status = unauthorizedError; // HttpStatus['401'];
        error.message = (
          req,
          false,
          'UNAUTHORIZED_USER_ACCESS'
        ); // 'Format is Authorization: Bearer [token]';
        next(error);
      }
    } else {
      const error = new Error('TOKEN_NOT_FOUND');
      error.status = utility.httpStatus('UNAUTHORIZED');
      error.message = (
        req,
        false,
        'UNAUTHORIZED_USER_ACCESS'
      );
      next(error);
    }
  } catch (error) {
    error.status = utility.httpStatus('UNAUTHORIZED');
    next(error);
  }
};
export default authValidateRequest;
