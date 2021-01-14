//I: string
//O: string of longest palindrome
//C: none
//E: odd and even length


const longestPalindrome = function(string) {
    const length = string.length;
    let result = '';

    const centeredPalindrome = function(left, right) {
        while (left >= 0 && right < length
            && string[left] === string[right]) {
        left--;
        right++;
    }
    return string.slice(left + 1, right);
};

    for (let i = 0; i < length; i++) {
        const oddPal = centeredPalindrome(i - 1, i + 1);
        const evenPal = centeredPalindrome(i, i + 1);

        if (oddPal.length > result.length) {
        result = oddPal;
        }
        if (evenPal.length > result.length) {
        result = evenPal;
        }
    }
    return result;
}