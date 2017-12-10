import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommonService {

	public postAdded_Observable = new Subject();

	constructor(){

	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}

}