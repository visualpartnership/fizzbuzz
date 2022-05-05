class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score % 3 === 0  && explorer.score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if(explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else if(explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        if(number % 3 === 0  && number % 5 === 0){
            return "FIZZBUZZ";
        } else if(number % 3 === 0) {
            return "FIZZ";
        } else if(number % 5 === 0) {
            return "BUZZ";
        }else{
            return number;
        }
    }

    static botFizzBuzz(number){
        let calificacion = "";
        if(number % 3 === 0  && number % 5 === 0){
            calificacion = "FIZZBUZZ";
        } else if(number % 3 === 0) {
            calificacion = "FIZZ";
        } else if(number % 5 === 0) {
            calificacion = "BUZZ";
        }else{
            calificacion = number;
        }
        const responseBot = `Tu número es: ${number}. Validación: ${calificacion}`;
        return responseBot;
    }
}

module.exports = FizzbuzzService;
