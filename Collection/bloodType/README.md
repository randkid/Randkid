# bloodType
Korean blood type data
## Source
[혈핵형 비율 통계 자료 모음](https://gist.github.com/gnlow/849db4af125b6603f4a9684b5e22a017)
## Use (Deno)
```ts
import bloodType from "https://raw.githubusercontent.com/randkid/bloodType/master/mod.ts"

console.log(bloodType.rand(Math.random())) // A or B or O or AB
```
