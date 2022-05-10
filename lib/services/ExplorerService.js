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
    static filterByStacks(explorers, mission){//Creacion de un nuevo metodo para realizar el filtro para Stacks
        const explorersByStack = explorers.filter((explorer) => explorer.stacks == mission);//Hacemos el filtro para sacar los datos que 
        //hay en Stacks 
        return explorersByStack;//Regresamos los valores del filtro
    }

    static getExplorersUsernamesByStacks(explorers, mission){//Agregamos un nuevo metodo, el cual tomara dos parametros que se le mande
        const explorersByMission = ExplorerService.filterByStacks(explorers, mission);//llamamos al metodo filterByStacks para aguardar
        //los resultados en la constante de explorersByMission
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);// Hacemos el mapeo de los datos de 
        //explorersByMission para obtener solo los username de los explorers
        return explorersUsernames; //Regresamos los valores de explorersUsernames
    }

}

module.exports = ExplorerService;
