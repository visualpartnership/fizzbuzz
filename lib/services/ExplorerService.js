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
    static getExplorersByStack(explorers, stack){
        const notUndefined = anyValue => typeof anyValue !== "undefined";
        const ExplorersByMission = explorers.map((explorer) => {
            if(explorer.stacks.includes(stack) == true){
                return explorer;
            }
        }
            ).filter(notUndefined); ;
        return ExplorersByMission;
    }

}

module.exports = ExplorerService;
