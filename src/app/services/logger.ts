import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Logger {
  logger(message: any) {
    console.log('From Logger Service');
    console.log(message);
  }
}
