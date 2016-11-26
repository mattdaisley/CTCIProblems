export class IsPermutation {
    
    validate( input1, input2 ): boolean {

        if ( input1.length !== input2.length ) return false;

        let str1 = input1.split('').sort().join();
        let str2 = input2.split('').sort().join();

        if ( str1 !== str2 ) return false;

        return true;
    }
}