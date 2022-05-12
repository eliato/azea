export interface widgetFollow{
    logo: string;
    followCount: string;
    follow: string;
    friendCount: string;
    friend: string;
}

export const followWidget: widgetFollow[] = [
    {logo: 'fa-facebook', followCount: '56k', follow: 'Following', friendCount:'17k' , friend:'Friends'},
    {logo: 'fa-twitter', followCount: '86k', follow: 'Following', friendCount:'20k' , friend:'Friends'},
    {logo: 'fa-linkedin', followCount: '76k', follow: 'Following', friendCount:'27k' , friend:'Friends'},  
    {logo: 'fa-instagram', followCount: '36k', follow: 'Following', friendCount:'10k' , friend:'Friends'} 
]

export interface widgetCard{
    text: string;
    bg: string;
    textCount: string;
    logo: string;
}

export const cardWidget: widgetCard[] = [
    {bg:'primary', text:'Invoices', textCount:'625',logo: 'fa-file-text-o'},
    {bg:'secondary', text:'Sales', textCount:'25k',logo: 'fa-signal'},
    {bg:'warning', text:'Profit', textCount:'62K',logo: 'fa-usd'},
    {bg:'info', text:'News', textCount:'542',logo: 'fa-newspaper-o'},
]

export interface widgetTarget{
    header: string;
    title: string;
    percentage: string;
    percentageValue: number;
    percentageType: string;
    percentagePositive: string;
    footerTitle1: string;
    footerTitle1Count: string;
    footerTitle2: string;
    footerTitle2Count: string;
}

export const followTarget: widgetTarget[] = [
    {header: 'Actual Revenue Vs Target Revenue', title: 'fa-facebook', percentageType:'primary' ,percentageValue: 90, percentage: '+90', percentagePositive: 'success',footerTitle1:'Target Revenue', footerTitle1Count:'$35,425', footerTitle2:'Actual Revenue', footerTitle2Count:'$28,425'},
    {header: 'Actual Customers Vs Target', title: 'fa-twitter', percentageType:'secondary' ,percentageValue: 25, percentage: '-25', percentagePositive: 'danger', footerTitle1:'Target Customers', footerTitle1Count:'5,643', footerTitle2:'Actual Customers', footerTitle2Count:'2,341'},
    {header: 'Customer Avg Revenue Vs Target', title: 'fa-linkedin', percentageType:'success' ,percentageValue: 95, percentage: '+95', percentagePositive: 'success', footerTitle1:'Target Revenue', footerTitle1Count:'$67,234', footerTitle2:'Actual Revenue', footerTitle2Count:'$32,543'}
]

export interface widgeticon{
    logo: string;
    text: string;
    bg: string;
    textCount: string;
}

export const iconWidget: widgeticon[] = [
    {bg:'primary', text:'New Orders', textCount:'262',logo: 'fa-shopping-cart'},
    {bg:'success', text:'Customer Visitis', textCount:'2635',logo: 'fa-users'},
    {bg:'secondary', text:'Mails', textCount:'245',logo: 'fa-envelope'},
]

export interface widgetTable{
    id: number;
    image: string;
    value: string;
    price: string;
    title: string;
    currentRate: number;
    status: string;
    statusState: string;
}

export const widgetTableList: widgetTable[] = [
    {id: 1, image:'../../assets/images/orders/1.jpg', value:'Cosmetics', price: '$1234', currentRate: 5,title:'last sale 3 days ago', status:'Regular', statusState:'success'},
    {id: 2, image:'../../assets/images/orders/2.jpg', value:'Sports', price: '$5436', currentRate: 5,title:'last sale 1hr ago', status:'Top Seller', statusState:'secondary'},
    {id: 3, image:'../../assets/images/orders/3.jpg', value:'Bags', price: '$540', currentRate: 5,title:'last sale 1 week ago', status:'Irregular', statusState:'danger'},
    {id: 4, image:'../../assets/images/orders/4.jpg', value:'Grocery', price: '$1543', currentRate: 5,title:'last sale Today', status:'Regular', statusState:'success'},
    {id: 5, image:'../../assets/images/orders/5.jpg', value:'Mobiles', price: '$6427', currentRate: 5,title:'last sale Today', status:'Top Pick', statusState:'primary'},
    {id: 6, image:'../../assets/images/orders/6.jpg', value:'Watches', price: '$6343', currentRate: 5,title:'last sale Today', status:'Top Pick', statusState:'primary'},
]