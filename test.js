/**
 * Created by lyn on 2017/4/12.
 */
var smallestGoodBase = function(n) {
    //var num = Number(n);
    var maxLen = parseInt((Math.log(n))/(Math.log(2))) + 1;
    for(let j = maxLen; j >= 2; j--) {
        var b = parseInt(Math.pow(n, 1.0/(j - 1)));
        var cur = 1;
        var sum = "1";

        var addStrings = function(num1, num2) {
            var res = "";
            var c = 0;
            for(let k = num1.length - 1,l = num2.length - 1; k >= 0 || l >= 0; k--, l--) {
                var temp = (num1[k] ? parseInt(num1[k]) : 0) + (num2[l] ? parseInt(num2[l]) : 0);
                res = (temp + c) % 10 + res;
                c = parseInt((temp + c) /10);
            }
            if(c !== 0)
                res = c + res;
            return res;
        };

        for(let i = 1; i < j; i++) {
            // sum += (cur *= b);
            cur *= b;
            sum = addStrings(sum, String(cur));
        }
        if(sum == n) {
            return String(b);
        }
    }
    return String(n - 1);
};
var num2 = "470988884881403701";
window.onload = smallestGoodBase(num2);