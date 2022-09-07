describe("check the existing names",function(){
    it("should store the names in an empty array", function(){
        const plan = price_plan()
        plan.pushingNames('Nkuli')
        assert.equal('Nkuli',plan.ourNames('Nkuli'))
    }) 
    it("should store the names in an empty array", function(){
        const plan= price_plan()
        plan.pushingNames('Zee')
        assert.equal('Zee',plan.ourNames('Zee'))
    }) 
    it("should store the names in an empty array", function(){
        const plan = price_plan()
        plan.pushingNames('Lesedi')
        assert.equal('Lesedi',plan.ourNames('Lesedi'))
    }) 
})