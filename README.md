# Search Github Repository

✨[결과물 보러가기](https://kaehehehe.github.io/search-repository-app)✨

## 사용 스택
- React
- TypeScript
- styled-components
- axios
- react-paginate
- react-router

## 기능 설명

1. repository를 검색할 수 있습니다.

2. repository를 최대 4개까지 저장할 수 있습니다.<br />
이미 저장되어 있는 repository를 저장하려고 하거나,<br />이미 repository가 4개 저장되어 있는 경우 모달창으로 이미 4개가 저장되어있다는 메시지가 뜹니다.

3. 저장한 repository는 삭제할 수 있습니다.

4. repository를 검색하면 검색 결과를 무한스크롤하여 확인할 수 있으며, 스크롤을 많이 했을 경우 맨 위로 다시 스크롤을 해서 돌아가기 번거롭다는 점을 고려하여 클릭시 화면 최상단으로 한번에 이동하는 버튼을 추가했습니다.

5. 저장된 repository의 issue를 확인할 수 있으며, 한 페이지 당 30개씩 확인할 수 있습니다. 또한 페이지네이션을 통해 모든 issue를 확인할 수 있습니다.

## 실행 방법
```
npm run start
```