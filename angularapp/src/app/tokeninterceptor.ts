import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private injector: Injector) {
        
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('Custom logic' + req.url);

        req = req.clone({
            setHeaders: {
                Authorization: 'shkjshks4564s,nsnsnsnskj'
            }
        });  return next.handle(req);

    }

}