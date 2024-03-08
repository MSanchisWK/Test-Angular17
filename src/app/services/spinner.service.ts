import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    _isLoading = signal(false);

    show() {
        this._isLoading.set(true);
    }

    hide() {
        this._isLoading.set(false);
    }

    get isLoading() {
        return this._isLoading();
    }
}
