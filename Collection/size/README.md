# size
Korean body size data  
한국인 인체 치수 데이터
## Source
[Size Korea 6차 인체치수조사(2010)](https://sizekorea.kr/page/report/2) 중 직접 측정 데이터  
7차 조사보다 측정 대상 범위가 넓은 6차 조사의 데이터를 사용함
## Changes
Source 데이터와의 차이
- 성별에 따라 두 파일(m.csv, f.csv)로 나누고 `성별` 값은 삭제함
- `BMI 평가`와 같이 문자열(저체, 표준, 과체 등)인 값 삭제
- N/A 값 있는 레코드 삭제 (남자: 906/7532 = 12.02%, 여자: 216/6484 = 3.33%)
- 나이 순으로 정렬
## Use (Deno)
```ts
import {m, f} from "https://raw.githubusercontent.com/randkid/size/master/mod.ts";
console.log(m.data.length, f.data.length); // 6626 6268
```
