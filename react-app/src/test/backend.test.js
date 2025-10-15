import {describe, test, expect} from 'vitest'

describe('local dummy test', ()=>{
    test('1', ()=>{
        expect(1).toBe(1)
    })
})

describe('Backend', ()=>{
    test('2', ()=>{
        expect(2).toBe(2)
    })
})