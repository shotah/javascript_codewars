function isValidWalk(walk) {
    walk.reduce(
        (acc, cur) => {
            if (typeof acc[cur] == 'undefined') {
                acc[cur] = 1;
            } else {
                acc[cur] += 1;
            }
            return acc;
        }
    );
}


// describe("Tests", () => {
//     it("test", () => {
        //some test cases for you...
        Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
        Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
        Test.expect(!isValidWalk(['w']), 'should return false');
        Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
//     });
// });