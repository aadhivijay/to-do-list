import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommonService, listDataType } from '../common.service';

@Component({
    selector: 'app-title-bar',
    templateUrl: './title-bar.component.html',
    styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

    @Input() list: listDataType[];
    @Input() showAction: 'Save' | 'Add';
    @Input() showBack: boolean;
    @Output() action = new EventEmitter<any>(undefined);

    public title: string = 'to-do-list+';

    constructor(
        private commonService: CommonService
    ) {

    }

    ngOnInit() {
    }

    public actionHandler(action: string) {
        switch (action) {
            case 'Add': {
                break;
            }
            case 'Save': {
            }
        }
        this.action.next({
            type: action
        });
    }

    public back() {
        this.commonService.setList(this.list);
    }

}
