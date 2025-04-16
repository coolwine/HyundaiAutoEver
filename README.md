## 저장소 주소
https://github.com/coolwine/HyundaiAutoEver

## 설치

```bash
yarn install
yarn dev
```

# 접근
[http://localhost:3000](http://localhost:3000) 브라우져 주소로 접근합니다.

# 설명
- /api/faq: 최초접근 시 test 데이터를 생성하여 메모리에 저장합니다. 이후 접근 시에는 메모리에 저장된 데이터를 활용합니다.
- /api/faq/category: 카테고리 데이터를 리턴합니다. 

# 제한사항
- 아래 조건을 참고하여 안내드리는 주소(https://wiblebiz.kia.com/FAQ)의 화면을
- 본인이 작업한다는 가정 하에 최대한 비슷하게 제작 (지원자의 갯랩, 깃헙 저장소에서 과제를 수행)
1. 조건 1 : 필요한 이미지가 있다면 다운로드하여 사용 가능
2. 조건 2 : 필요한 API 응답 결과는 개발자도구(크롬 기준) > 네트워크 탭 > Fetch/XHR 에서 참고
             (프로젝트 내부에 목업데이터 형태로 가지고 시뮬레이션)
3. 조건 3 : MSW(Mock Service Worker)나 JSON Server 같은 오픈소스 활용 가능
4. 조건 4 : 개발 환경은 Vite를 활용해서 직접 구성 또는 Next.js를 세팅하여 진행
5. 조건 5 : 스타일링은 CSS, SASS, CSS in JS 등 작업하기 편한 도구 활용
6. 조건 6 : Fetch 관련 오픈소스도 React Query, SWR등을 활용 가능, 네이티브 Fetch를 사용 가능