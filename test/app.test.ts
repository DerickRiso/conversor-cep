import { checkExceptions, searchAddress, displayResults } from "../src/app";

describe("checkExceptions should be return valid", ()=>{
    it("should be valid cep", ()=>{
        const actual = checkExceptions('48730000')

        expect(actual).toBe(true);
    })

    it("should be a short cep", ()=>{
        const actual = checkExceptions('123');
        expect(actual).toBe(false);
    })

    it("should be a long cep", ()=>{
        const actual = checkExceptions('123456789');
        expect(actual).toBe(false);
    })

    it("should be a numerical input", () => {
        const actual = checkExceptions('abcdefgh');
        expect(actual).toBe(false)
    })

    it("should be valid with -" , ()=>{
         const actual = checkExceptions('48730-000');
        expect(actual).toBe(true)
    })
})

