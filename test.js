function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers_error = function(l1, l2) {
    var q = "",w = "";var r = null,t = null ;
    while (l1) {
        q =  l1.val.toString() +"" + q ;
        if (l1 && l1.next) {l1 = l1 ? l1.next : null;} else {break;}
    }
    while (l2) {
        w =  l2.val.toString() +"" + w;
        if (l2 && l2.next) {l2 = l2 ? l2.next : null;} else {break;}
    }
    const bigInt = require("big-integer");
    var e = bigInt(q).add(w);
    // q = 1000000000000000000000000000001
    // w = 465
    console.log(e);
    return;
    // var e = (q + w).toString().split("");
	var l = e.length;
	for(let a = 0;a<l;a++){
        r = function(a,b){
            if(b){      
                a.next = b;
            }
            return a;
        }( new ListNode(parseInt(e[a])) , r);
	}
	console.log(r);
};

// var addTwoNumbers = function(l1, l2) {
//     var arr = [];var r= null;
//     while (l1 || l2) {
//         var a = l1 ? l1.val : 0;
//         var b = l2 ? l2.val : 0;
//         var e = new ListNode();
//         if(a+b >= 10){
//             e.val = (a+b) - 10;
//             if (l2.next) {
//                 l2.next.val += 1;
//             } else {
//                 l2.next = new ListNode(1);
//             }
//         }else{
//             e.val = a + b;
//         }
//         e.next = r;
//         r = e;
//         if (l2 && l2.next || l1 && l1.next) {
//             l1 = l1 ? l1.next : null;
//             l2 = l2 ? l2.next : null;
//         }else {
//             r = e;
//             break;
//         }
//     }
//     console.log( r);
// };


var addTwoNumbers = function(l1, l2) {
    var arr = [];var r= null;
    while (l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        if(a+b >= 10){
            arr.push((a+b) - 10)
            if (l2.next) {
                l2.next.val += 1;
            } else {
                l2.next = new ListNode(1);
            }
        }else{
            arr.push(a+b)
        }
        if (l2 && l2.next || l1 && l1.next) {
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }else {
            break;
        }
    }
    var l = arr.length;
	for(let ad = (arr.length-1);ad>=0;ad--){
        r = function(i,j){
            if(j){      
                i.next = j;
            }
            return i;
        }(new ListNode(parseInt(arr[ad])) , r);
	}
    console.log( r);
};



// var p1 = {
//     val:2,
//     next:{
//         val:4,
//         next:{
//             val:3,
//             next:null
//         }
//     }
// }

// var p2 = {
//     val:5,
//     next:{
//         val:6,
//         next:{
//             val:4,
//             next:null
//         }
//     }
// }

var p1 = {
    val:1,
    next:{
        val:8,
        next:null
    }
}

var p2 = {
    val:0,
    next:null
}
addTwoNumbers(p1,p2);
// addTwoNumbers([2,4,3],[5,6,4])
