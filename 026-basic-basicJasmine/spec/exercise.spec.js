describe("I am Jasmine Exercise B", ()=>{
    it("I am the it block 1!", ()=>{
        console.log("I am the it block 1!");
    })

    it("I am the it block 2!", ()=>{
        console.log("I am the it block 2!");
    })

    it("I am the it block 3!", ()=>{
        console.log("I am the it block 3!");
    })

    it("I am the it block 4!", ()=>{
        console.log("I am the it block 4!");
    })

    it("I am the it block 5 but I am fail!", ()=>{
        console.log("I am the it block 5 but I am fail!");
        throw new Error()
    })
})