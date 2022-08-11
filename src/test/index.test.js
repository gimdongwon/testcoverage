import {add, substraction} from './index';
import apiCall from './index';

describe('api test', ()=> {
    test('api call test', async ()=> {
        const result = await apiCall('32993122');
        expect(result).toBe(true);
    })
})

describe('덧셈뺄셈 테스트',  ()=> {  
    test('ADD 테스트', ()=> {
        expect(add(3,5)).toBe(8);
    })
    test('SUB 테스트', () => {
        expect(substraction(5,3)).toBe(2);
    })
})

describe('API 테스트', () => {
    it('API test', ()=> {
        
    })
})
