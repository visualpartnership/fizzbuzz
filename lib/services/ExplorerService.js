class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = ExplorerService.filterByMission(
            explorers,
            mission
        );
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersByMission = this.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map(
            (explorer) => explorer.githubUsername
        );
        return explorersUsernames;
    }

    /*metodo para regresar lista de explorers que
  contengan el stack JavaScript */

    static filterExplorersByStack(explorers, stack) {
        const explorersByStack = explorers.filter((explorer) =>
            explorer.stacks.includes(stack)
        );
        return explorersByStack;
    }
}

module.exports = ExplorerService;
