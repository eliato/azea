export interface todolist1  {
    id: number;
    star: boolean;
    name: string;
    image : string;
    work: string;
    status: string;
    statusState: string;
}

export const Todolist1List: todolist1[]= [
    {id: 1, star: false, name: 'Shamika Griffith', image: '../../assets/images/users/1.jpg', work: 'Work Assigned By Clients', status: 'new', statusState: 'primary' },
    {id: 2, star: true, name: 'Archie Kesler', image: '../../assets/images/users/2.jpg', work: 'Try To Get New Work', status: 'Completed', statusState: 'success' },
    {id: 3, star: false, name: 'Carolyne Wirtz', image: '../../assets/images/users/3.jpg', work: 'Rationally Encounter Quences', status: 'new', statusState: 'primary' },
    {id: 4, star: false, name: 'Consuelo Valenzuela', image: '../../assets/images/users/4.jpg', work: 'Which Of Us Ever Undertakes', status: 'Completed', statusState: 'success' },
    {id: 5, star: false, name: 'Myrta Powe', image: '../../assets/images/users/5.jpg', work: 'Quis Autem Vel Eum Iure', status: 'new', statusState: 'primary' },
    {id: 6, star: false, name: 'Margarette Wycoff', image: '../../assets/images/users/6.jpg', work: 'Ut Enim Ad Minima Veniam', status: 'pending', statusState: 'warning' },
    {id: 7, star: true, name: 'Veronica Kimery', image: '../../assets/images/users/7.jpg', work: 'Inventore Veritatis Et Quasi', status: 'Completed', statusState: 'success' },
    {id: 8, star: false, name: 'Raisa Ladwig', image: '../../assets/images/users/8.jpg', work: 'Vero Eos Et Accusamus Et Iusto', status: 'new', statusState: 'primary' },
    {id: 9, star: true, name: 'Kathaleen Roysden', image: '../../assets/images/users/9.jpg', work: 'Which Of Us Ever Undertakes', status: 'pending', statusState: 'warning' },
    {id: 10, star: false, name: 'Elizabeth Loux', image: '../../assets/images/users/10.jpg', work: 'Account Of The System', status: 'new', statusState: 'info' },
]