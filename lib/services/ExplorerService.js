const Reader = require("./../utils/Reader");

class ExplorerService {
    static filterByMssion(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

    static filterByStack(explorers, stack){
        const explorersStackInJavascrip = explorers.filter((explorer) => {
            if(explorer.stacks.includes(stack)){
                return explorer;
            }
        });

        return explorersStackInJavascrip;
    }

}
module.exports = ExplorerService;
