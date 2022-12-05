function countHours(year: number, holidays: string[]) {
  // const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0

  let count = 0
  holidays.forEach(date => {
    const [moth, day] = date.split('/')
    let newDate = new Date(year, parseInt(moth) - 1, parseInt(day))
    if (newDate.getDay() === 0 || newDate.getDay() === 6) {
      return
    }

    count++
  })
  return count * 2
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

console.log(countHours(year, holidays))
