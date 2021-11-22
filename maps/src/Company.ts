import { address, company } from 'faker';
import { Mappable } from './Map';


export class Company implements Mappable {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'green';

  constructor() {
    this.companyName = company.companyName();
    this.catchPhase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `Company's name: ${this.companyName}`;
  }
}
