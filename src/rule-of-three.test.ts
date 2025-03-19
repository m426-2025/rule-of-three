import { RuleOfThree } from "./rule-of-three";

test("ten for two is five for one", () => {
  // Arrange
  const total: number = 10.0;
  const amount: number = 2.0;
  const rule = new RuleOfThree(total, amount);

  // Act
  const actualTotal: number = rule.calculateFor(1);

  // Assert
  expect(actualTotal).toBe(5.0);
});
