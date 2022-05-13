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
        const explorersByMission = ExplorerService.filterByMission(
            explorers,
            mission
        );
        const explorersUsernames = explorersByMission.map(
            (explorer) => explorer.githubUsername
        );
        return explorersUsernames;
    }

    static getExplorersUsernamesByStack(explorers, stack) {
        const explorers_JSstack = explorers.filter((singleExplorer) =>
            singleExplorer.stacks.includes(stack)
        );

        const usernames_JSstack = explorers_JSstack.map(
            (singleExplorer_JSstack) => singleExplorer_JSstack.githubUsername
        );
        return usernames_JSstack;
    }
}

module.exports = ExplorerService;
