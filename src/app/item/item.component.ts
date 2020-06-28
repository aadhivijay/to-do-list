import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { listDataType } from '../common.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() item: listDataType = {
        id: '32',
        title: 'dfjdsf sdjkjs fsd sd',
        status: false,
        description: 'sajkdhsdfksdj d hjbgfd skjfsdk sdufshd sdf'
    };
    @Output() action = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    public delete() {

    }

    public addNew() {
        this.action.next({
            type: 'Add'
        });
    }

    public statusToggle() {
        // this.item.status = this.item.status ? false : true;
    }

}
