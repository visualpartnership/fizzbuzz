class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static filterByStack(explorers, mission){
        if(!Array.isArray(explorers))
            return "explorers should be an array";
        if(+explorers===+[])  
            return "explorers cannot be an empty array";
        if(typeof mission !== "string")
            return "mission should be a string";
        if(!["node","java"].includes(mission))
            return "invalid mission";
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(mission));
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
