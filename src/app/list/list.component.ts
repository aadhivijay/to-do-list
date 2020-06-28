import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommonService, listDataType } from '../common.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input() list: listDataType[];
    @Input() selectedItem: listDataType;
    @Output() action = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    public openItem(item: listDataType) {
        this.action.next({
            type: 'open',
            id: item.id
        });
    }

    public statusToggle(item: listDataType) {
        // item.status = item.status ? false : true;
    }

}
