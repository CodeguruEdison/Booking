
export const addDays = (date: Date, daysToAdd: number) => {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}
export const getWeek = (forDate: Date, daysOffSet = 0) => {
    const date = addDays(forDate, daysOffSet);
    const day = date.getDay();
    return {
        date,
        start: addDays(date, -day),
        end: addDays(date, 6 - day)
    };
}