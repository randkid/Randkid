import { Nominal, tuple } from "../../src/mod.ts"

import residence from "../residence/mod.ts"
import birthdate from "../birthdate/mod.ts"
import _cheerio from "https://dev.jspm.io/cheerio"
import _proj4 from "https://dev.jspm.io/proj4"

// Disable type check for dependencies
const cheerio: any = _cheerio
const proj4: any = _proj4

const form = (data: Record<string, string>) => {
    let result = new URLSearchParams
    for (const key in data) {
        result.append(key, data[key])
    }
    return result
}

export default new Nominal({
    categories: [],
    inputMaterials: tuple([residence, birthdate]),
    async rand(seed, residenceVal, birthdateVal) {
        const age = (new Date).getFullYear() - (new Date(birthdateVal)).getFullYear() + 1
        const schoolType = age > 16 ? 3 : age > 13 ? 2 : 1

        const data = await fetch("https://schoolzone.emac.kr/gis/totalSearch.do", {
            method: "POST",
            body: form({searchText: residenceVal[1]})
        }).then(x => x.text())

        const $ = cheerio.load(data)

        const [match, lon, lat] = $("div.result_content_sec:nth-child(3) > div:nth-child(3) > ul:nth-child(3) > li:nth-child(1) > input:nth-child(1)").attr("onclick").match(/parent\.fn_getSchoolArea\((.+),(.+),'.+','vworld'\);/)

        const epsg5186 = "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs "
        const [x, y] = proj4("EPSG:4326", epsg5186, [Number(lon), Number(lat)])
        const schoolArea = await fetch("https://schoolzone.emac.kr/gis/schoolAreaSearch.do", {
            method: "POST",
            body: form({
                x, y, lon, lat,
                schoolType: "elementSchoolArea"
            })
        }).then(x => x.text())

        const $2 = cheerio.load(schoolArea)
        const schools = Array.from($2("tr")).map(
            ({attribs}: any) => {
                if (attribs.schoolname && attribs.schooltype == schoolType) {
                    return [attribs.schoolname, attribs.eduarea, attribs.schooltype]
                }
            }
        ).filter(x => x)

        return schools[Math.floor(Math.random() * schools.length)]
    }
})