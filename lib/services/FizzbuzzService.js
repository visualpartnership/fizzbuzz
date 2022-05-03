class FizzbuzzService {
    static ApplyValidationInExplorer(explorer){
        if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else if(explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        if(number % 5 === 0 && number % 3 === 0){
            return number = "FIZZBUZZ";
        }else if(number % 3 === 0){
            return number = "FIZZ";
        }else if(number % 5 === 0){
            return number = "BUZZ";
        }else{
            return number;
        }
    }
}
module.exports = FizzbuzzService;