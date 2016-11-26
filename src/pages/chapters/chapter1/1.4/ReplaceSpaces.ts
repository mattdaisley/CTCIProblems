export class ReplaceSpaces {
    
    replace( input ): string {

        let answer = input.trim().split(' ').join('%20');

        return answer;
    }
}