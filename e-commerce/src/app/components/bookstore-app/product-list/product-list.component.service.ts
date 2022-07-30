import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Books";
import { Observable } from "rxjs";

@Injectable()

export class BooksService
{
    // private url = 'https://localhost:44382/api/bookstore';
	
	private url = 'https://sheet.best/api/sheets/74e97125-fd8d-4223-b374-146724e6b797';
	
    httpOptions = {
        Header: new HttpHeaders({'content-type': 'application/json'})
    }
    
    constructor(private http: HttpClient) {}

    getBook():Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }
}