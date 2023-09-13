// Conver date format 2023-09-02T00:00:00.000Z to 2023-09-02

export function convertDate(date: string): string {
  return date.split('T')[0]
}
