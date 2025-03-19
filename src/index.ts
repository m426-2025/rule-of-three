import { RuleOfThree } from "./rule-of-three";

const potatoRule = new RuleOfThree(3.5, 12);
const potatoPrice20 = potatoRule.calculateFor(20);
console.log(`20 Potatoes for ${potatoPrice20.toFixed(2)}`);
console.log(`correct? ${potatoPrice20 == (3.5 / 12) * 20}`);

const bananaRule = new RuleOfThree(2.9, 6);
const bananaPrice10 = bananaRule.calculateFor(10);
console.log(`10 Bananas for ${bananaPrice10.toFixed(2)}`);
console.log(`correct? ${bananaPrice10 == (2.9 / 6) * 10}`);
