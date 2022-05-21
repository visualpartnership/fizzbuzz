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

    // Lista de explorers por un stack
    static getListExplorersByStack(explorers, mission){
        const listExplorersByStack = explorers.filter((explorer) => explorer.mission == mission);
        const newListExplorersByStack = listExplorersByStack.map((explorer) => explorer.githubUsername);       
        return newListExplorersByStack;        
    }

}

module.exports = ExplorerService;
