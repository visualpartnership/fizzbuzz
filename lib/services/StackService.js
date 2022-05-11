class StackService {

    static getExplorersByStack(explorers,stack){

        const getExplorers = explorers.filter((filter) => filter.stacks.includes(stack));
        return getExplorers
    }

    static getUsernamesByStack(explorers,stack){

        const getExplorers = explorers.filter((filter) => filter.stacks.includes(stack));
        const onlyUsernames = getExplorers.map((usernames) => usernames.name)
        return onlyUsernames

    }
    
}


module.exports = StackService