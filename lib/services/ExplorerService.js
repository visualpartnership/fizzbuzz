class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersByMission.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

    static filterExplorerByStack(explorers, stack){
        const explorersFilteredByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersFilteredByStack;
    }
}


module.exports = ExplorerService;
