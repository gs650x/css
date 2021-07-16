import { LightningElement, api } from 'lwc';

export default class LightningEffect extends LightningElement {

    @api name
    //made this api property, in case of text style needs to be changed.
    @api nameStyle =
        `font-family: montserrat,sans-serif;
        font-weight: 400;
        line-height: 1.25;
        font-size: 1.5rem;
        color: #313131;`;

}