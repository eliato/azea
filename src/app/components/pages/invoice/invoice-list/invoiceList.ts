export interface invoiceList{
    id: number;
    value: string;
    name: string;
    billDate: string;
    email: string;
    amount: string;
    billStatus: string;
    billState: string;
}

export const InvoiceList: invoiceList[] = [
    {id: 1, value: '#23543', name:'Robert Downey Junior', billDate: '11 march 2021', email: 'RobertJunior@hotmail.com', amount: '$230', billStatus: 'paid', billState: 'success'},
    {id: 2, value: '#22343', name:'Chris Evans', billDate: '13 aug 2021', email: 'chrisevans@gmail.com', amount: '$130', billStatus: 'pending', billState: 'danger'},
    {id: 3, value: '#24563', name:'Chris Hemsworth', billDate: '23 june 2021', email: 'chrishemsworth@hotmail.com', amount: '$342', billStatus: 'paid', billState: 'success'},
    {id: 4, value: '#32563', name:'Tom Hiddleston', billDate: '15 july 2021', email: 'tomhiddleston@gmail.com', amount: '$143', billStatus: 'paid', billState: 'success'},
    {id: 5, value: '#25675', name:'Elizabeth Olsen', billDate: '12 march 2021', email: 'elezabethqueen@hotmail.com', amount: '$600', billStatus: 'paid', billState: 'success'},
    {id: 6, value: '#43290', name:'Mark Ruffalo', billDate: '23 june 2021', email: 'markrufffaloiam@gmail.com', amount: '$1100', billStatus: 'pending', billState: 'danger'},
    {id: 7, value: '#34673', name:'Tom Holland', billDate: '16 may 2021', email: 'tomhollanditsme@gmail.com', amount: '$456', billStatus: 'pending', billState: 'danger'},
    {id: 8, value: '#26675', name:'Natasha Romanoff', billDate: '30 march 2021', email: 'natashaactress@hotmail.com', amount: '$1020', billStatus: 'paid', billState: 'success'},
]