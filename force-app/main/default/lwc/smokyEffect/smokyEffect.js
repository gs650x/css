import { LightningElement, api } from 'lwc';

export default class SmokyEffect extends LightningElement {

    _name;
    //it supports only 12 character including white space, if more characters are needed add css selector for nth child
    @api get name() {
        return this._name;
    }

    set name(value) {
        this._name = Array.from(value);
    }

    styleClass

    connectedCallback() {
        setTimeout(() => {
            this.styleClass = 'smoke-back';
        }, 1000)
    }
}