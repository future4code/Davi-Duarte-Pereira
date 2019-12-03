
const timeTracker = (year: number, period?: string): string => {
    // period ? period : "AD";
    if (period === "AD"){
        if (year >= 0 && year <= 475) {
            return "Ancient Age";
        } else if (year >= 476 && year <= 1452) {
            return "Middle Age";
        } else if (year >= 1453 && year <= 1788) {
            return "Modern Age";
        } else if (year >= 1789 && year <= 2020) {
            return "Contemporary Age";
        } else return "Invalid year.";
    } else if (period === "BC") {
        if (year >= 3999 && year <= 100000) {
            return "Pre-history";
        } else if (year >= 0 && year <= 3998) {
            return "Ancient Age";
        } else return "Invalid year";
    } else return "Period invalid";
};


console.log(timeTracker(50000, "BC"));


// 100.000 BC  till 3999 BC = Pre-history
// 4000 BC till 475 AD = Ancient Age
// 476 AD till 1452 AD = Middle Age
// 1453 AD till 1788 AD  = Modern Age
// 1789 AD till now  = Contemporary age