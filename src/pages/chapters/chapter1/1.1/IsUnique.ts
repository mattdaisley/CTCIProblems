export class IsUnique {
    
    validate( input ): boolean {

        let arrInput: Array<string> = input.split('').sort();

        var lastLetter: string;

        for (let char of arrInput) {
            if ( char === lastLetter ) {
                return false;
            }
            lastLetter = char;
        }

        return true;
    }
}