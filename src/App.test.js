import React from "react";
import { render } from "@testing-library/react";
import App, { addHit, addBall, addFoul, addStrike } from "./App";

//test for addHit

test("increments hit count by 1", () => {
  const setHit = jest.fn();
  addHit({ hit: 3, setHit });

  expect(setHit).toBeCalledWith(4);
});

//test for addBall

test("increments ball count by 1 until 4, then resets", () => {
  const setBall = jest.fn();
  addBall({ ball: 4, setBall });

  expect(setBall).toBeCalledWith(0);
});

//test for addStrike

test("increments strike count until 3, then resets", () => {
  const setStrike = jest.fn();
  addStrike({ strike: 3, setStrike });

  expect(setStrike).toBeCalledWith(0);
});

//test for addFoul

test("fouls increase strike count by 1, only if strike count is less than 2", () => {
  const setFoul = jest.fn();
  const setStrike = jest.fn();
  addFoul({ strike: 1, foul: 1, setFoul, setStrike });

  expect(setFoul).toBeCalledWith(2);
  expect(setStrike).toBeCalledWith(2);
});
