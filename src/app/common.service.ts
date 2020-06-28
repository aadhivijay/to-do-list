import { Injectable } from '@angular/core';

export interface listDataType {
    id: string,
    title: string,
    status: boolean,
    description: string
}

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private list: listDataType[];

    constructor() { }

    private generateId(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let result = '';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    private getNewItem() {
        const item: listDataType = {
            id: this.generateId(10),
            title: '',
            status: false,
            description: ''
        };
        return item;
    }

    public getList() {
        if (!this.list) {
            const list = JSON.parse(localStorage.getItem('list'));
            this.list = list ? list : [];
        }
        return this.list;
    }

    public setList(list: listDataType[]) {
        localStorage.setItem('list', JSON.stringify(list));
        this.list = list;
        return this.list;
    }

    public getItem(id: string) {
        const list = this.getList();
        let result = undefined;
        if (list && list.length) {
            result = list.find((item: listDataType) => {
                return item.id === id;
            });
        }
        return result;
    }

    public addNewItem() {
        const list = this.getList();
        list.push(this.getNewItem());
        this.list = list;
        return this.list;
    }

}
