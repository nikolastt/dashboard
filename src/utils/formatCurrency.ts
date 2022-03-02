const formatCurrency = (amount: number): string =>{
    return amount.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    )
}

export default formatCurrency;