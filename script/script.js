var startNo = 1; //시작 값
var endNo = 2; // 종료 값

// 3개월의 세금이 아래와 같음
var taxBtll = [40000, 52500, 30600] ;
// tax Bill 세금, 배열변수, 인덱스번호 => 0, 1, 2

var sum = 0;
for (var i = startNo; i <= endNo; i++) {
    //increase : 증가하다

    sum += taxBtll[i]; //누적 공식      sum = sum + taxBill[i];

}

document.write("3개 값의 누적 : " + sum);
