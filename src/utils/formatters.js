function formatValue(value) {
    const valueFormated = value.replace('R$ ', '').replace(',', '.');

    return Number(valueFormated);
}

export {
    formatValue,

}