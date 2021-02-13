# name
Korean name data
한국인 이름 통계 데이터
## Source
[대법원 전자가족관계등록시스템 통계 서비스 - 선호하는 출생자 이름 현황](http://efamily.scourt.go.kr/st/StFrrStatcsView.do)  
[원본 데이터](https://github.com/gnlow/files/tree/master/name)
## Changes
- 필요없는 데이터 (비율 등) 삭제
- 2008 ~ 2019년 수치 합산
## Use (Deno)
```ts
import name from "https://raw.githubusercontent.com/randkid/name/master/mod.ts"
console.log(name.rand(Math.random()))
```
