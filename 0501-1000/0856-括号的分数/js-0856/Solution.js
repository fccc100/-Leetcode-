/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let n = s.length;
    if (n == 0) return 0;
    if (n == 2) {
        return 1;
    }

    let stack = [];
    let matchIndex = -1;
    for (let i = 0; i < n; i++) {
        if (!stack.length) {
            stack.push(s[i]);
        } else {
            if (s[i] == '(') {
                stack.push(s[i]);
            } else {
                stack.pop();

                if (!stack.length) {
                    matchIndex = i;
                    break;
                }
            }
        }
    }
    if (matchIndex == n - 1) {
        return 2 * scoreOfParentheses(s.substring(1, n - 1));
    } else {
        return scoreOfParentheses(s.substring(0, matchIndex + 1)) + scoreOfParentheses(s.substring(matchIndex + 1, n));
    }
};