import { getLineWidth } from "./Diagram";

test("getLineWidth (diagramLeads: 400, totalLeads: 500)", () => {
  expect(getLineWidth(500, 500)).toBe(500);
});

test("getLineWidth (diagramLeads: 425, totalLeads: 500)", () => {
  expect(getLineWidth(425, 500)).toBe(425);
});

test("getLineWidth (diagramLeads: 200, totalLeads: 500)", () => {
  expect(getLineWidth(200, 500)).toBe(200);
});

test("getLineWidth (diagramLeads: 150, totalLeads: 500)", () => {
  expect(getLineWidth(150, 500)).toBe(150);
});

test("getLineWidth (diagramLeads: 50, totalLeads: 500)", () => {
  expect(getLineWidth(50, 500)).toBe(50);
});

test("getLineWidth (diagramLeads: 600, totalLeads: 500)", () => {
  expect(() => getLineWidth(600, 500)).toThrow(TypeError("Leads amount in diagram cannot be greater than total leads"));
});

test("getLineWidth (diagramLeads: 0, totalLeads: 500)", () => {
  expect(() => getLineWidth(0, 500)).toThrow(TypeError("Leads amount in diagram cannot be less than zero or valid"));
});

test("getLineWidth (diagramLeads: NULL, totalLeads: 500)", () => {
  expect(() => getLineWidth(null, 500)).toThrow(TypeError("Leads amount in diagram cannot be less than zero or valid"));
});