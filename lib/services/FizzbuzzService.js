class FizzbuzzService{
    static applyValidationInExplorer(explorer){

        if(explorer.score % 3 == 0 && explorer.score % 5 == 0){
            return ({name:explorer.name, score:explorer.score, trick:"FIZZBUZZ"});
        }
        else if(explorer.score %3 === 0){
            return ({name:explorer.name, score:explorer.score, trick:"FIZZ"});
        }
        else if(explorer.score %5 === 0){
            return ({name:explorer.name, score:explorer.score, trick:"BUZZ"});
        }
        else{
            return ({name:explorer.name, score:explorer.score, trick:explorer.score});
        }
    }
    static validationNumber(number){
        if(number % 3 == 0 && number % 5 == 0){
            return ("FIZZBUZZ");
        }
        else if(number %3 === 0){
            return ("FIZZ");
        }
        else if(number %5 === 0){
            return ("BUZZ");
        }
        else{
            return (number);
        }

    }
}

module.exports = FizzbuzzService;