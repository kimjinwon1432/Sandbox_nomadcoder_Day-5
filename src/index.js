const body = document.querySelector("body");
body.style.backgroundColor = "white";
const h2 = document.createElement("h2");
body.appendChild(h2);
h2.innerText = "Hello~";
const colors = ["yellow", "purple", "skyblue"];

//innerheight, innerWidth는 창, 창처럼 사용하는 내부 객체에 사용 가능 ex) tab, frame...
//window.innerHeight: 수평스크롤바를 포함한 창의 내부 높이를 픽셀단위로 반환

function bgColor() {
  const innerWidth = window.innerWidth;
  h2.innerText = `Hello~~${innerWidth}`;
  if (innerWidth < 400) {
    body.style.backgroundColor = colors[0];
  } else if (innerWidth < 680) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", bgColor);
/*
if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. 
classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. 
remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 참고 자료에서 확인할 수 있습니다.
add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 참고자료에서 확인할 수 있습니다.
innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. 
*/
