export function convertBulanHuruf(dateTime: string) {
    const date = new Date(dateTime);
    const month = date.getMonth();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    if (isNaN(date.getTime())) {
        return '';
    }
    else {
        return `${date.getDate()} ${monthNames[month]} ${date.getFullYear()}`;
    }

}