export const DateConverter = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
}