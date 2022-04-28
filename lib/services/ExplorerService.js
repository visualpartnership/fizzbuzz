class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }

    static getExplorersStacks(explorers, stack){
        const StackExplorer = explorers.filter((explorer) => explorer.stacks.includes(stack));
        const StackExplorerUsername = StackExplorer.map((explorer) => explorer.githubUsername)
        return StackExplorerUsername
    }

}

module.exports = ExplorerService;
