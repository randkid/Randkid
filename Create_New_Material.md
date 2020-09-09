# Material 추가하기
## Import Randkid
- Material: 기본
  - Categorical: 범주형
    - Nominal: 명목
  - Numerical: 수치형
  - NumericalTuple: 수치형(튜플)
```ts
import { Material, tuple } from "https://raw.githubusercontent.com/randkid/Randkid/master/mod.ts"
```
## Material 속성 정의
```ts
export default new NumericalTuple({                  // 수치형(튜플) 변수
    inputMaterials: tuple([birthdate, gender]),      // 입력 변수 설정 (타입 추론을 위해 tuple() 사용)
    ranges: [],                                      // 변수값 범위 정보 (필수 아님)
    rand(seed, birthDateVal, genderVal) {            // 두번째 arg 부터 무작위 생성된 데이터 입력됨
        // ...                                       // seed와 입력값에 따라 데이터 생성
    }
})
```
