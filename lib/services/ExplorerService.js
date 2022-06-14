const { text } = require("express");

class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersByMission = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersByMission;
  }

  static filterByStack(explorers, stack) {
    const explorersByStack = explorers.filter((explorer) =>
      explorer.stacks.includes(stack)
    );
    return explorersByStack;
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersByMission = ExplorerService.filterByMission(
      explorers,
      mission
    );
    return explorersByMission.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersByMission = ExplorerService.filterByMission(
      explorers,
      mission
    );
    const explorersUsernames = explorersByMission.map(
      (explorer) => explorer.githubUsername
    );
    return explorersUsernames;
  }

  static getExplorersByStack(explorers, stack) {
    const explorersByStack = ExplorerService.filterByStack(explorers, stack);
    const explorersName = explorersByStack.map(
      (explorer) => explorer.name + ": " + explorer.stacks
    );
    return explorersName;
  }
}

module.exports = ExplorerService;
