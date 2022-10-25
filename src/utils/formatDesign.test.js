import formatDesign from "./formatDesign.js"

const design1 = {
  placement: "front",
  x_offset: 0,
  y_offset: 100,
  width: 200,
  height: 100
}

const design2 = {
  placement: "back",
  x_offset: 50,
  y_offset: 0,
  width: 200,
  height: 100
}
 
const end = { 
  placement: "Front Left Chest",
  x_offset: 0,
  y_offset: 127,
  width: 10.0,
  height: 5.0
}

const end2 = {
  placement: "Back Center",
  x_offset: -13,
  y_offset: 0,
  width: 10,
  height: 5
}

test("check format design", () => {
  expect(formatDesign(design2)).toBe(end2)
})