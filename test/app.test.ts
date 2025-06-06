import { checkExceptions } from "../src/app";

describe("checkExceptions should be valid", ()=>{

    it("should be return true", ()=>{
        const actual = checkExceptions('48730000')

        expect(actual).toBe(true);
    })
})