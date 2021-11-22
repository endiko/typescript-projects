/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

console.log(user)
console.log(company)

const map = new Map('map');

console.log(map)
map.addMarker(user);
map.addMarker(company);
