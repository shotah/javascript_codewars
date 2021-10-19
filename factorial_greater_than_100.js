function factorial(n){
  console.log(n)
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result *= i
    
  }
  console.log(result.toLocaleString('fullwide', {useGrouping:false}))
  return result.toLocaleString('fullwide', {useGrouping:false});
}


describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(factorial(1), '1', '1!');
    Test.assertEquals(factorial(5), '120', '5!');
    Test.assertEquals(factorial(9), '362880', '9!');
    Test.assertEquals(factorial(15), '1307674368000', '15!');
    Test.assertEquals(factorial(154), '30897696138473508879585646703632404659201907040888820477871589289865505687886666220300447285640952619071680544337494109264649994680187591361311072737951454695525676891035640863743200899694758450943586711068571022031011228320107310612480000000000000000000000000000000000000', '154!');
  });
});
