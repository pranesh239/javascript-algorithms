const steps = require("./index");

it('should the specified number of steps with "#" and spaces', () => {
  expect(steps(3)).toBe(`#  
## 
###
`);
});
