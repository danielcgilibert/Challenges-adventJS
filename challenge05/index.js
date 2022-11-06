export default function daysToXmas(date) {
  const diaNavidad = new Date('Dec 25, 2021')
  const one_day = 1000 * 60 * 60 * 24
  const dias = Math.ceil((diaNavidad.getTime() - date.getTime()) / one_day)

  return dias
}
