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
        return explorersByMission.map((explorer) => explorer.githubUsername);
        
    }
    static filterByStack(explorers, stack){
        return explorers.filter((explorer) =>  explorer.stack.includes(stack));
    }

}

module.exports = ExplorerService;
