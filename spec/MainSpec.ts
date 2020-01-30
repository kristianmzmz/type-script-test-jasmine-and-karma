import "jasmine";
import Main from "../src/Main";

describe("Main module", ()=>{
    let main: Main;

    beforeEach(()=>{
        main = new Main();
    });

    it("should exists", ()=>{
        expect(main).toBeInstanceOf(Main);
    });
});