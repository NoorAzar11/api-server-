'use strict';


const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

const obj={id:1 ,foodDatatype:"hello from the otherside"}

describe('creating testing Unites', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })


// describe('creating testing Unites', () => {
//     beforeEach(() => {
//         jest.spyOn(console, 'log').mockImplementation();
//     })
//     it('handles found requset 200 ', async () => {
//         const response = await request.get('/food');
//         expect(response.status).toEqual(200);
//         expect(typeof response.body).toEqual('object');
//     });

//     it('handles found requset 200 with id', async () => {
//         const response = await request.get('/food/1');
//         expect(response.status).toEqual(200);
//         expect(typeof response.body).toEqual('object');
//     });

//     it('handles not found requset 200-2', () => {
//         const response = request.post('/food')
//         .then((response)=>{ expect(response.status).toEqual(200)})
//       });
//       it('testing updated Data we get from API', () => {
//         const updateRecord = request.put('/food/3')
//         .then((response)=>{ expect(response.status).toEqual(200)})
//       });
//       it('testing deleted data from api', () => {
//         const updateRecord = request.delete('/food')
//         .then((response)=>{ expect(response.status).toEqual(204)})
//       });
// });




    it('handles not found requset 404 try again',async()=>{
        const response=await request.get('/food');
        expect(response.status).toEqual(200);
    });

    
    it('testing Data we get from API ', async () => {
        const res= await request.get('/food');
        expect(res.status).toEqual(200);
            });
    
it('handles not found requset try again 2',()=>{
    const response= request.post('/food').then((response)=>expect(response.status).toEqual(404));
    
});

it('handles not found requset try again 2',()=>{
    const response= request.post('/food').then((response)=>expect(response.status).toEqual(200));
   
});


    it('testing read we get from API ', async () => {
        const res= await request.get('/food/3');
        expect(res.status).toEqual(200);
            });
        

    it('testing updated Data we get from API ', async () => {
        const res= await request.put('/food/2').send(obj);
        expect(res.status).toEqual(200);
            });

    it('testing deleted data from api', async () => {
        const res = await request.delete('/food/2');
        expect(res.status).toEqual(204);
    });
  
});  

