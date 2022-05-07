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
    
     static getExplorerStacksByMission(explorers,stack){
        const stacksByExplorers = explorers.filter((explorer) => explorer.stacks.includes(stack));
        const UsernamesByMission = stacksByExplorers.map((explorer) => explorer.githubUsername);
        return UsernamesByMission;
    }

}

module.exports = ExplorerService;
