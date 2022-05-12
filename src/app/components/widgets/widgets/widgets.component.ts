import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import { dashboardProductsTableData, dashboardTableData, invoiceSummery, TopProducts } from '../../dashboard/dashboard/dashboardDataTable';
import { cardWidget, followTarget, followWidget, iconWidget, widgetCard, widgetFollow, widgeticon, widgetTable, widgetTableList, widgetTarget } from './widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  public dashboardProductsTableDataList: TopProducts[];
  public widgetTable: widgetTable[];
  public WidgetFollowList: widgetFollow[];
  public WidgetTargetList: widgetTarget[];
  public WidgetIconList: widgeticon[];
  public WidgetCardList: widgetCard[];
  constructor(private gallery: Gallery) {
    this.dashboardProductsTableDataList = dashboardProductsTableData;
    this.widgetTable = widgetTableList;
    this.WidgetFollowList = followWidget;
    this.WidgetTargetList = followTarget;
    this.WidgetCardList = cardWidget;
    this.WidgetIconList = iconWidget;
   }

  ngOnInit(): void {
  }
  showGallery(index: number) {
    let prop = {
        images: [
            {path: '../../assets/images/photos/1.jpg'},
            {path: '../../assets/images/photos/2.jpg'},
            {path: '../../assets/images/photos/3.jpg'},
            {path: '../../assets/images/photos/4.jpg'},
            {path: '../../assets/images/photos/5.jpg'},
            {path: '../../assets/images/photos/6.jpg'},
            {path: '../../assets/images/photos/7.jpg'},
            {path: '../../assets/images/photos/8.jpg'}            
        ],
        index 
    };
    this.gallery.load(prop);
}
}
