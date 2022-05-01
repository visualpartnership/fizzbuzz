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

    static filterByStack(explorers, stack_name){
        if([null,undefined].includes(explorers) || [null,undefined].includes(stack_name)){
            return [];
        }
        return explorers.filter((each_explorer) => each_explorer.stacks.includes(stack_name))
    }
}

module.exports = ExplorerService;
