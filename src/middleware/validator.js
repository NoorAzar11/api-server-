
'use strict';

module.exports = (req, res, next) => {
   const name = req.query.name
    if (typeof name === 'string' && name.length !== 0) {
        req.name = name
        next();
    }
    else {
        next(`Error Found Please Try again `)
    }
}