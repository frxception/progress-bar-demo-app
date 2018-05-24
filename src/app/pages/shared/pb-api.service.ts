import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../config/app.config';
import {catchError, tap} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {LoggerService} from '../../core/shared/logger.service';
import {PBData} from "./pb.model";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PBApiService {

    private pbEndpointsUrl: string;
    private translations: any;


    constructor(private http: HttpClient,
                private translateService: TranslateService,
                private snackBar: MatSnackBar) {
        this.pbEndpointsUrl = AppConfig.endpoints.progressBarAPI;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            LoggerService.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }


    getPBEndpoints(): Observable<PBData> {
        return this.http.get<PBData>(this.pbEndpointsUrl)
            .pipe(
                tap(data => LoggerService.log(`Retrieved progress bars data`)),
                catchError(this.handleError<PBData>(`getPBEndpoints data`))
            );
    }

    showSnackBar(name): void {
        const config: any = new MatSnackBarConfig();
        config.duration = AppConfig.snackBarDuration;
        this.snackBar.open(this.translations[name], 'OK', config);
    }


}
