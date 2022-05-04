class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static filterByStack(explorers, stack){
        const explorersByStack = [];
        explorers.filter((explorer) => {
            explorer.stacks.map((stackExplorer) => {
                if(stackExplorer == stack){
                    explorersByStack.push(explorer)
                }
            })
        });
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

    static getExplorersByStack(explorers, stack){
        const explorersByStack = ExplorerService.filterByStack(explorers, stack);
        return explorersByStack;
    }

}

module.exports = ExplorerService;
