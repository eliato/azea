export interface userlist01 {
    id: number;
    user :string;
    image: string;
    dateOfJoin: string;
    statusText: string;
    statutsState: string;
    role: string
}

export const userlist1: userlist01[] = [
    {id: 1, user: 'Nam Guy', image: '../../assets/images/users/1.jpg', dateOfJoin: '09 Dec 2017', statusText: 'Active', statutsState: 'primary', role:'web designer'},
    {id: 2, user: 'Tracy Lindahl', image: '../../assets/images/users/2.jpg', dateOfJoin: '27 Jan 2018', statusText: 'Active', statutsState: 'primary', role:'web developer'},
    {id: 3, user: 'Breana Millis', image: '../../assets/images/users/3.jpg', dateOfJoin: '09 Dec 2017', statusText: 'Ideal', statutsState: 'warning', role:'php developer'},
    {id: 4, user: 'Antwan Tramel', image: '../../assets/images/users/4.jpg', dateOfJoin: '20 Jan 2018', statusText: 'Active', statutsState: 'primary', role:'Hr Manager'},
    {id: 5, user: 'Geraldine Arpin', image: '../../assets/images/users/5.jpg', dateOfJoin: '13 Jan 2018', statusText: 'Active', statutsState: 'primary', role:'Recriuter'},
    {id: 6, user: 'Clement Niehaus', image: '../../assets/images/users/6.jpg', dateOfJoin: '25 Jan 2018', statusText: 'Inactive', statutsState: 'danger', role:'CEO'},
    {id: 7, user: 'Melinda Mayers', image: '../../assets/images/users/7.jpg', dateOfJoin: '12 Jan 2018', statusText: 'Active', statutsState: 'primary', role:'web developer'},
    {id: 8, user: 'Willodean Monson', image: '../../assets/images/users/8.jpg', dateOfJoin: '27 Jan 2018', statusText: 'Active', statutsState: 'primary', role:'web designer'},
    {id: 9, user: 'Brenton Moncada', image: '../../assets/images/users/9.jpg', dateOfJoin: '12 Dec 2017', statusText: 'Ideal', statutsState: 'warning', role:'web developer'},
    {id: 10, user: 'Cyndy Kirschbaum', image: '../../assets/images/users/10.jpg', dateOfJoin: '10 Dec 2017', statusText: 'Inactive', statutsState: 'danger', role:'web developer'},
    {id: 11, user: 'Renna Spino', image: '../../assets/images/users/11.jpg', dateOfJoin: '03 Dec 2017', statusText: 'Active', statutsState: 'primary', role:'Hr Manager'},
    {id: 12, user: 'Freeman Kozlowski', image: '../../assets/images/users/12.jpg', dateOfJoin: '09 Dec 2017', statusText: 'Inactive', statutsState: 'danger', role:'web developer'},
]