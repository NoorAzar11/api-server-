

const logger = require('../src/middleware/logger');

describe('Dealing With middleWare', ()=> {

    let consoleSpy; 
    let req = {};
    let res = {};
    let next = jest.fn();
    
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('Will Bring some Outputs ', ()=> {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    
    it('will take to next level ', ()=> {
        logger(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});
