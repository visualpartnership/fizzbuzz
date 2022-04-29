class ExplorerService {

    /**
     * 
     * @param {explorersObject} explorers 
     * @param {string} mission 
     * @returns explorers filter by mission
     */
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    /**
     * 
     * @param {explorersObject} explorers 
     * @param {string} mission 
     * @returns explorers amount filter by mission
     */
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    /**
     * 
     * @param {explorersObject} explorers 
     * @param {string} mission 
     * @returns explorer's usernames list
     */
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }

    /**
     * 
     * @param {explorersObject} explorers 
     * @param {string} stack 
     * @returns explorers filtering by stack
     */
    static filterByStack(explorers, stack){
        const explorerByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorerByStack;
    }

}

module.exports = ExplorerService;
