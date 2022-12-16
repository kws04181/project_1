// yotube Iframe API 비동기로 로드
// api 사용하지 않고 iframe 태그만 써서 영상 삽입이 가능한데
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'zxQ_4Ye0Zd8', // 최초 재생할 유튜브 영상 ID
    playerVars: { // 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'zxQ_4Ye0Zd8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상 준비되었을 때
      onReady: function (event) {
        event.target.mute(); //음소거!
      }
    }
  });
}

// 유튜브 섹션 위에 부유 요소 애니메이션 처리
gsap.to('.floating1', 1.2, {
  delay: 1,  // 얼마나 늦게 애니메이션 시작할 것인지 지연 시간  
  y: 15,  // 수직으로 얼마나 움직일지 설정
  repeat: -1,  // 몇번 반복할지 설정, -1은 무한 반복
  yoyo: true,
  ease: Power1.easeInOut, // Easing 함수 적용
});
gsap.to('.floating2', 1, {
  delay: .5,  // 얼마나 늦게 애니메이션 시작할 것인지 지연 시간  
  x: 25,  // 수평으로 얼마나 움직일지 설정
  repeat: -1,  // 몇번 반복할지 설정, -1은 무한 반복
  yoyo: true,
  ease: Power1.easeInOut, // Easing 함수 적용
});
gsap.to('.floating3', 0.8, {
  delay: 0,  // 얼마나 늦게 애니메이션 시작할 것인지 지연 시간  
  y: 20,  // 수직으로 얼마나 움직일지 설정
  x: -15,  // 수평으로 얼마나 움직일지 설정
  repeat: -1,  // 몇번 반복할지 설정, -1은 무한 반복
  yoyo: true,
  ease: Power1.easeInOut, // Easing 함수 적용
});