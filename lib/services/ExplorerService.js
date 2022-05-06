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
    static filterByStack(explorers, name){
        const explorersWithStack = explorers.filter((explorer) => explorer.stacks.includes(name));
        return explorersWithStack;
    }
    static botExplorersByMission(explorers, mision){
        let responseBot = "";
        const explorersByMission = ExplorerService.filterByMission(explorers, mision);
        const explorersNames = explorersByMission.map((explorer) => explorer.name);
        const explorersNamesWithSpaces = explorersNames.toString().split(', ').join(',').split(',').join(', ');
        if (explorersNamesWithSpaces === ""){
            responseBot = `No hay explorers con misión ${mision}`;
        } else {
            responseBot = `Explorers en la misión ${mision}: ${explorersNamesWithSpaces.toString()}`;
        }
        return responseBot;
    }
}

module.exports = ExplorerService;
