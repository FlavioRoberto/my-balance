export function getMaxValue(data) {
    let maxValue = 0;

    data.forEach(element => {
        if (element > maxValue)
            maxValue = element;
    });

    return maxValue;
}