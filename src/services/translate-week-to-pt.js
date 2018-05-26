const translateWeekToPt = term => {

    term = term.toLowerCase();
    
    switch(term){
        case "sun": return "Domingo";
        case "mon": return "Segunda";
        case "tue": return "Terça";
        case "wed": return "Quarta";
        case "thu": return "Quinta";
        case "fri": return "Sexta";
        case "sat": return "Sábado";
    }
}; 

export default translateWeekToPt;
