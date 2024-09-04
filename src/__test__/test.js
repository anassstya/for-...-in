import { orderByProps } from "../index";

test('test sorted', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const sort = ["name", "level"];
  let result = orderByProps(obj, sort);
  let expected = [
    {key: "name", value: "мечник"}, 
    {key: "level", value: 2}, 
    {key: "attack", value: 80}, 
    {key: "defence", value: 40}, 
    {key: "health", value: 10} 
  ]
  expect(result).toEqual(expected);
})