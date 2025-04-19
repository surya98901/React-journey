import { sum } from "../sum";

test("Should return the sum of elements",()=>{
    const result = sum(2,4);
    expect(result).toBe(6);
})