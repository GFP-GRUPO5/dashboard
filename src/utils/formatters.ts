export const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const monthIndex = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const month = monthNames[parseInt(monthIndex, 10) - 1];

    return { formattedDate: `${day}/${monthIndex}/${year}`, month };
};

export const formatLongDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();