describe("My first jasmine specification test",function(){
    it("should say hello and fail!",function(){
        console.log("Hello, Jasmine!");
        throw new Error();
    });
})

describe("The thing that you want to test",function(){
    it("should do something",function(){
        // do something
        console.log('I am do something')
    });
    it("should do the other thing",function(){
        // do the other thing
        console.log('I am do other thing')
        throw new Error();

    });
});