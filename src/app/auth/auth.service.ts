import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthService{
    constructor(private http: HttpClient){}

    CustomerRegistration(data):Observable<any>{
        console.log(data.form.value);
        return this.http.post('/app/v1/user/register', data.form.value);
    }

}