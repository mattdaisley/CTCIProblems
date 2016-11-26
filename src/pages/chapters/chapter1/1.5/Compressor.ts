interface charTracker {
    key: string,
    count: number
}

export class Compressor {
    
    compress( input ): string {
        var arrInput: Array<string> = input.split('');

        var uniqueCounter: number = 0;
        var arrAnswer: Array<charTracker> = [];
        var strAnswer: string = '';

        if ( input.length === 0 ) return input;

        arrInput.forEach( (char, index) => {
            if ( arrAnswer.length > 0 ) {
                if ( arrAnswer[uniqueCounter].key === char ) {
                    arrAnswer[uniqueCounter].count ++;
                } else {
                    uniqueCounter ++;
                    arrAnswer[uniqueCounter] = { key: char, count: 1 };
                }
            } else {
                arrAnswer[uniqueCounter] = { key: char, count: 1 };
            }
        });

        if ( arrAnswer.length >= arrInput.length ) return input;

        for ( var index in arrAnswer ) {
            strAnswer += arrAnswer[index].key + arrAnswer[index].count;
        }
        
        return strAnswer;
    }
}