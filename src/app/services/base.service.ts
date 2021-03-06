import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


export class BaseService {
 
  defaultReqHeader = {
    headers: {
        'X-CSRF-Header': '-',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',    
    },
  };

  baseUrl = 'http://livescore-api.com/api-client/leagues/table.json';

  handleError(response: HttpErrorResponse) {
    let defaultMessage = 'There was an error. Please try again later.';
    if (response.error instanceof ErrorEvent) {
      console.error('An error occurred:', response.error.message);
      defaultMessage = response.error.message
    } else {
      defaultMessage = response.error && response.error.Message
        ? response.error.Message : defaultMessage;
      console.error(
        `Server returned code ${response.status}, ` +
        `Error: ${defaultMessage}`);
    }
    // return an observable with a user-facing error message
    return throwError(defaultMessage);
  }

}
