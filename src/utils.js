export const polishMonthMapping = (article) => {
    if (!article || !article.date) return ''
    const splitDate = article.date.split(' ')

    const month = (() => {
        switch (splitDate[0]) {
            case 'January': return 'Styczeń'
            case 'February': return 'Luty'
            case 'March': return 'Marzec'
            case 'April': return 'Kwiecień'
            case 'May': return 'Maj'
            case 'June': return 'Czerwiec'
            case 'July': return 'Lipiec'
            case 'August': return 'Sierpień'
            case 'September': return 'Wrzesień'
            case 'October': return 'Październik'
            case 'November': return 'Listopad'
            case 'December': return 'Grudzień'
            default: return ''
        }
    })()
    splitDate[0] = month;

    const day = splitDate[1].replace(/\D/g, '')
    splitDate[1] = `${day},`;

    return splitDate.join(' ')
}

export const minToReadText = (article) => {
    if (!article) return ''
    if (article.timeToRead === 1) return 'minuta'
    if (article.timeToRead === 2 || article.timeToRead === 3 || article.timeToRead === 4) return 'minuty'
    return 'minut'
}
