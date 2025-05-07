import 'dayjs/locale/fr';
import dayjs from "dayjs";
let strLang = (import.meta.env.VITE_LOCALE + "").toLowerCase();

export function ymFormat(date) {
    return dayjs(date).locale(strLang).format("YYYY MMM");

}
