import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService, listDataType } from '../common.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild('listCont') listCont: ElementRef;
    @ViewChild('itemCont') itemCont: ElementRef;

    public list: listDataType[];
    public item: listDataType;
    public showAction: 'Save' | 'Add' = 'Add';

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private commonService: CommonService
    ) { }

    ngOnInit() {
        this.list = this.commonService.getList();
    }

    public titleAction(event: any) {
        switch (event.type) {
            case 'Add': {
                this.add();
                break;
            }
            case 'Save': {
                this.save();
                break;
            }
            case 'Back': {
                this.back();
                break;
            }
        }
    }

    public listAction(event: any) {
        switch (event.type) {
            case 'open': {
                this.open(event.id);
                break;
            }
        }
    }

    public itemAction(event: any) {
        switch (event.type) {
            case 'Add': {
                this.add();
            }
        }
    }

    private add() {
        this.list = this.commonService.addNewItem();
        this.item = this.list[this.list.length - 1];
        this.handleCont('item');
        this.showAction = 'Save';
    }

    private back() {
        this.handleCont('list');
    }

    private save() {
        this.list = this.commonService.setList(this.list);
    }

    private open(id: string) {
        this.item = this.commonService.getItem(id);
        this.router.navigate(['item'], { queryParams: { id } });
        this.handleCont('item');
        this.showAction = 'Save';
    }

    private handleCont(view: 'list' | 'item') {
        if (window.innerWidth < 468) {
            if (view === 'list') {
                this.renderer.setStyle(
                    this.listCont.nativeElement,
                    'width',
                    '100%'
                );
                this.renderer.setStyle(
                    this.itemCont.nativeElement,
                    'width',
                    '0%'
                );
            } else {
                this.renderer.setStyle(
                    this.itemCont.nativeElement,
                    'width',
                    '100%'
                );
                this.renderer.setStyle(
                    this.listCont.nativeElement,
                    'width',
                    '0%'
                );
            }
        }
    }

}
