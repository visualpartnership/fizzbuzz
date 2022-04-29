class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter( explorer => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map( explorer => explorer.githubUsername);
        return explorersUsernames;
    }

    static filterByStack(explorers, stack) {

        const explorersByStack = [];

        explorers.forEach( explorer => {            
            const result = explorer.stacks.some( item => item == stack );
            if (result) explorersByStack.push(explorer);
        });

        return explorersByStack;
    }
}

module.exports = ExplorerService;
