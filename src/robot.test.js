const { createRobot } = require("./robot");

describe("Test path RAALAL", () => {
  it("Should output the final position coordinates and orientation", () => {
    const myRobot = createRobot(7, 3, "N");
    myRobot.instruction("RAALAL");
    expect(myRobot.getPosition()).toMatchObject({
      position: [9, 4],
      orientation: "W",
    });
  });
});
