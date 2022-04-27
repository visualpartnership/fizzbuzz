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
    static getExplorersByStack(explorers,stackvalue){

        const ExplorersFilteredByStack=explorers.filter((explorer)=>{
            for(let i=0;i<explorer.stacks.length;i++){
                if(explorer.stacks[i]==stackvalue){
                    return true;
                }
            }
        });

        return ExplorersFilteredByStack;
    }

}

module.exports = ExplorerService;
