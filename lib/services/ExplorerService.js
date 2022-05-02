class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static filterByStack(explorers, stack){
        if(!Array.isArray(explorers))
            return "explorers should be an array";
        if(+explorers===+[])  
            return "explorers cannot be an empty array";
        if(typeof stack !== "string")
            return "stack should be a string";
        if(!["javascript","elixir","groovy","reasonML","elm"].includes(stack))
            return "invalid stack";
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersByStack;
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

}

module.exports = ExplorerService;
