export const FormatMoney = (money:string): string => {
    const formatedValue = Number (money).toLocaleString("pt-br", {
        style:"currency",
        currency:"BRL",
    });
    return formatedValue;
};