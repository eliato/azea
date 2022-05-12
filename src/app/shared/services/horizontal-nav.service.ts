import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';

//MenuBar
export interface HorizontalMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMenu[];
}

//MenuBar
export interface HorizontalMegaMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMegaMenu[];
}

@Injectable({
  providedIn: 'root'
})
export class HorizontalNavService {

  constructor() { }


  MENUITEMS: HorizontalMenu[] = [
    {
      path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'home', badgeValue: 'Hot', active: false
    },
	{ path: '/maps/leaflet', icon: 'map-alt', title: 'Leaflet Maps', type: 'link' },
    {
			title: 'Widgets', icon: 'carousel', type: 'sub', active: false, children: [
				{ path: '/widgets/chart-widget', title: 'Chart Widgets', type: 'link' },
				{ path: '/widgets/widget', title: 'Widgets', type: 'link' },

			]
		},
    {
			title: 'Forms', icon: 'file-blank', type: 'sub', active: false, children: [
				{ path: '/forms/form-elements', title: 'Form Elements', type: 'link' },
				{ path: '/forms/advanced-forms', title: 'Advanced Forms', type: 'link' },
				{ path: '/forms/form-wizards', title: 'Form Wizards', type: 'link' },
				{ path: '/forms/form-editors', title: 'Form Editor', type: 'link' },
				{ path: '/forms/form-element-sizes', title: 'Form Elements Sizes', type: 'link' },
				{ path: '/forms/form-treeview', title: 'Form Treeview', type: 'link' },
				{ path: '/forms/form-validations', title: 'Form Validations', type: 'link' },
			]
		},
    {
			title: 'Charts', icon: 'bar-chart-alt-2', type: 'sub', active: false, children: [
				{ path: '/charts/apex-charts', title: 'apex-charts', type: 'link' },
				{ path: '/charts/chartjs-charts', title: 'chartjs-charts', type: 'link' },
				{ path: '/charts/Echarts', title: 'Echarts', type: 'link' },
				{ path: '/charts/chartlist', title: 'chartlist', type: 'link' }
			]
		},
    {
			title: 'Pages', icon: 'layer', type: 'sub', active: false, children: [
				{
					title:'Profile', type: 'sub', active: false, children : [
						{ path: '/pages/profile/profile01', title: 'Profile 01', type: 'link' },
						{ path: '/pages/profile/profile02', title: 'Profile 02', type: 'link' },
						{ path: '/pages/profile/profile03', title: 'Profile 03', type: 'link' },
					]
				},
				{ path: '/pages/edit-profile', title: 'Edit Profile', type: 'link' },
				{
					title:'Email', type: 'sub', active: false, children : [
						{ path: '/pages/email/email-compose', title: 'email Compose', type: 'link' },
						{ path: '/pages/email/email-inbox', title: 'email Inbox', type: 'link' },
						{ path: '/pages/email/email-read', title: 'email Read', type: 'link' },
					]
				},
				{
					title: 'Tables', icon: 'layout', type: 'sub', active: false, children: [
						{ path: '/tables/default-table', title: 'Default Table', type: 'link' },
						{ path: '/tables/data-table', title: 'Data Table', type: 'link' },
					]
				},
				{
					title: 'ECommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
						{ path: '/eCommerce/products', title: 'Products', type: 'link' },
						{ path: '/eCommerce/product-details', title: 'Product Details', type: 'link' },
						{ path: '/eCommerce/shopping-cart', title: 'Shopping Cart', type: 'link' },
						{ path: '/eCommerce/checkout', title: 'Checkout', type: 'link' },
						{ path: '/eCommerce/wishlist', title: 'Wishlist', type: 'link' },
					]
				},
				{
					title:'Pricing', type: 'sub', active: false, children : [
						{ path: '/pages/pricing/pricing01', title: 'Pricing 01', type: 'link' },
						{ path: '/pages/pricing/pricing02', title: 'Pricing 02', type: 'link' },
						{ path: '/pages/pricing/pricing03', title: 'Pricing 03', type: 'link' },
					]
				},{
					title:'Invoice', type: 'sub', active: false, children : [
						{ path: '/pages/invoice/invoice-list', title: 'Invoice List', type: 'link' },
						{ path: '/pages/invoice/invoice01', title: 'Invoice 01', type: 'link' },
						{ path: '/pages/invoice/invoice02', title: 'Invoice 02', type: 'link' },
						{ path: '/pages/invoice/invoice03', title: 'Invoice 03', type: 'link' },
						{ path: '/pages/invoice/add-invoice', title: 'Add Invoice', type: 'link' },
						{ path: '/pages/invoice/edit-invoice', title: 'Edit Invoice', type: 'link' },
					]
				},{
					title:'Blog', type: 'sub', active: false, children : [
						{ path: '/pages/blog/blog01', title: 'Blog 01', type: 'link' },
						{ path: '/pages/blog/blog02', title: 'Blog 02', type: 'link' },
						{ path: '/pages/blog/blog03', title: 'Blog 03', type: 'link' },
						{ path: '/pages/blog/blog-styles', title: 'Blog Styles', type: 'link' },
					]
				},
				{ path: '/pages/gallery', title: 'Gallery', type: 'link' },
				{ path: '/pages/faqs', title: 'FAQS', type: 'link' },
				{ path: '/pages/terms', title: 'Terms', type: 'link' },
				{ path: '/pages/search', title: 'Search', type: 'link' },
				{ path: '/pages/empty-pages', title: 'Empty Pages', type: 'link' },
				{ path: '/switcher/switcher01', title: 'switcher01', type: 'link' },
				{ path: '/switcher/switcher02', title: 'switcher02', type: 'link' },
			]
		},
    {
			title: 'Custom Pages', icon: 'customize', type: 'sub', active: false, children: [
				{
					title:'Register', type: 'sub', active: false, children : [
						{ path: '/custom-pages/register/register01', title: 'Register01', type: 'link' },
						{ path: '/custom-pages/register/register02', title: 'Register02', type: 'link' },
						{ path: '/custom-pages/register/register03', title: 'Register03', type: 'link' },
					]
				},
				{
					title:'Login', type: 'sub', active: false, children : [
						{ path: '/custom-pages/login/login01', title: 'Login01', type: 'link' },
						{ path: '/custom-pages/login/login02', title: 'Login02', type: 'link' },
						{ path: '/custom-pages/login/login03', title: 'Login03', type: 'link' },
					]
				},
				{
					title:'Forget Password', type: 'sub', active: false, children : [
						{ path: '/custom-pages/forget-password/forget-password01', title: 'Forget Password01', type: 'link' },
						{ path: '/custom-pages/forget-password/forget-password02', title: 'Forget Password02', type: 'link' },
						{ path: '/custom-pages/forget-password/forget-password03', title: 'Forget Password03', type: 'link' },
					]
				},
				{
					title:'Reset Password', type: 'sub', active: false, children : [
						{ path: '/custom-pages/reset-password/reset-password01', title: 'Reset Password01', type: 'link' },
						{ path: '/custom-pages/reset-password/reset-password02', title: 'Reset Password02', type: 'link' },
						{ path: '/custom-pages/reset-password/reset-password03', title: 'Reset Password03', type: 'link' },
					]
				},
				{
					title:'Lock Screen', type: 'sub', active: false, children : [
						{ path: '/custom-pages/lock-screen/lock-screen01', title: 'Lock Screen01', type: 'link' },
						{ path: '/custom-pages/lock-screen/lock-screen02', title: 'Lock Screen02', type: 'link' },
						{ path: '/custom-pages/lock-screen/lock-screen03', title: 'Lock Screen03', type: 'link' },
					]
				},
				{ path: '/custom-pages/under-construction', title: 'Under Construction', type: 'link' },
				{ path: '/custom-pages/coming-soon', title: 'Coming Soon', type: 'link' },
        {
          title: 'Error Pages', icon: 'message-square-error', type: 'sub', active: false, children: [
            { path: '/error-pages/400', title: '400', type: 'link' },
            { path: '/error-pages/401', title: '401', type: 'link' },
            { path: '/error-pages/403', title: '403', type: 'link' },
            { path: '/error-pages/404', title: '404', type: 'link' },
            { path: '/error-pages/500', title: '500', type: 'link' },
            { path: '/error-pages/503', title: '503', type: 'link' },
          ]
        },
			]
		},
    {
			title: 'Icons', icon: 'gift', type: 'sub', active: false, children: [
				{ path: '/icons/font-awsome', title: 'Font Awsome', type: 'link' },
				{ path: '/icons/material-design-icons', title: 'Material Design Icons', type: 'link' },
				{ path: '/icons/simple-line-icons', title: 'Simple Line Icons', type: 'link' },
				{ path: '/icons/feather-icons', title: 'Feather Icons', type: 'link' },
				{ path: '/icons/ionic-icons', title: 'Ionic Icons', type: 'link' },
				{ path: '/icons/flag-icons', title: 'Flag Icons', type: 'link' },
				{ path: '/icons/pe7-icons', title: 'Pe7 Icons', type: 'link' },
				{ path: '/icons/themify-icons', title: 'Themify Icons', type: 'link' },
				{ path: '/icons/typicons', title: 'Typicons', type: 'link' },
				{ path: '/icons/weather-icons', title: 'Weather Icons', type: 'link' },
				{ path: '/icons/material-svgs', title: 'Material Svgs', type: 'link' },
			]
		},
  ];
  MEGAMENUITEMS: HorizontalMegaMenu[] = [
    
    {
			title: 'Elements', icon: 'data', type: 'sub', active: false, children: [
				{ path: '/elements/accordion', title: 'Accordion', type: 'link' },
				{ path: '/elements/alerts', title: 'Alerts', type: 'link' },
				{ path: '/elements/avatars', title: 'Avatars', type: 'link' },
				{ path: '/elements/badges', title: 'Badges', type: 'link' },
				{ path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
				{ path: '/elements/buttons', title: 'Buttons', type: 'link' },
				{ path: '/elements/cards', title: 'Cards', type: 'link' },
				{ path: '/elements/card-images', title: 'Card Images', type: 'link' },
				{ path: '/elements/carousel', title: 'Carousel', type: 'link' },
				{ path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
				{ path: '/elements/footers', title: 'Footers', type: 'link' },
				{ path: '/elements/list-group', title: 'List Group', type: 'link' },
				{ path: '/elements/media-object', title: 'Media Object', type: 'link' },
				{ path: '/elements/modal', title: 'Modal', type: 'link' },
				{ path: '/elements/navigation', title: 'Navigation', type: 'link' },
				{ path: '/elements/pagination', title: 'Pagination', type: 'link' },
				{ path: '/elements/panel', title: 'Panel', type: 'link' },
				{ path: '/elements/popover', title: 'Popover', type: 'link' },
				{ path: '/elements/progress', title: 'Progress', type: 'link' },
				{ path: '/elements/tabs', title: 'Tabs', type: 'link' },
				{ path: '/elements/tags', title: 'Tags', type: 'link' },
				{ path: '/elements/tooltips', title: 'Tooltips', type: 'link' },
			]
		},
		{
			title: 'Apps', icon: 'unite', type: 'sub', active: false, children: [
			
        { path: '/apps/chat/chat01', title: 'Chat01', type: 'link' },
        { path: '/apps/chat/chat02', title: 'Chat02', type: 'link' },
    
        { path: '/apps/contact/contact01', title: 'Contact01', type: 'link' },
        { path: '/apps/contact/contact02', title: 'Contact02', type: 'link' },
    
        { path: '/apps/file-manager/filemanager01', title: 'File Manager01', type: 'link' },
        { path: '/apps/file-manager/filemanager02', title: 'File Manager02', type: 'link' },

        { path: '/apps/calendar', title: 'Calendar', type: 'link' },
				{ path: '/apps/cookies', title: 'Cookies', type: 'link' },
				{ path: '/apps/counters', title: 'Counters', type: 'link' },
				{ path: '/apps/dragula-cards', title: 'Dragula Cards', type: 'link' },
				{ path: '/apps/image-comparsion', title: 'Image Comparsion', type: 'link' },
				{ path: '/apps/image-crop', title: 'Image Crop', type: 'link' },
				{ path: '/apps/loaders', title: 'Loaders', type: 'link' },
				{ path: '/apps/notifications', title: 'Notifications', type: 'link' },
				{ path: '/apps/page-sessiontimeout', title: 'Page Sessiontimeout', type: 'link' },
				{ path: '/apps/range-slider', title: 'Range Slider', type: 'link' },
				{ path: '/apps/rating', title: 'Rating', type: 'link' },
				{ path: '/apps/sweet-alerts', title: 'Sweet Alerts', type: 'link' },

        { path: '/apps/todo-list/todo-list01', title: 'Todo List01', type: 'link' },
        { path: '/apps/todo-list/todo-list02', title: 'Todo List02', type: 'link' },
        { path: '/apps/todo-list/todo-list03', title: 'Todo List03', type: 'link' },
			
        { path: '/apps/time-line', title: 'Time Line', type: 'link' },
      
        { path: '/apps/user-list/userlist01', title: 'User List01', type: 'link' },
        { path: '/apps/user-list/userlist02', title: 'User List02', type: 'link' },
			]
		},
  ];

  //array
  items = new BehaviorSubject<HorizontalMenu[]>(this.MENUITEMS);
  itemsMega = new BehaviorSubject<HorizontalMegaMenu[]>(this.MEGAMENUITEMS);


}
