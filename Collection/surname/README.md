# surname
Korean surname data  
한국인 성씨, 본관 데이터
## Source
[성씨·본관별 인구(5인 이상) - 전국(2015) (통계청,「인구총조사」)](http://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1IN15SD)
## Changes
Source 데이터와의 차이
- "기타" 본관, 인구 1000명 미만 본관 데이터 삭제 (1097461/49705663명 = 2.20%)
- 성씨와 본관 정보 결합해서 정리
- 인구순 정렬
## Use (Deno)
```ts
import surname from "https://raw.githubusercontent.com/randkid/surname/master/mod.ts";
console.log(surname.rand(Math.random())) // ex) "소주 가(賈)"
```
