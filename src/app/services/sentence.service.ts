import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from 'src/app/models/Word';
import { WordType } from 'src/app/models/WordType';
import { Sentence } from 'src/app/models/Sentence';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class SentenceService {
  
  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSentences(): Observable<Sentence[]>{
    return this.http.get<Sentence[]>(this.apiUrl + "/sentences");
  }

  getWordTypes(): Observable<WordType[]> {
    return this.http.get<WordType[]>(this.apiUrl + "/word-types");
  }

  getWordsByType(word_type_id: number): Observable<Word[]> {
    return this.http.get<Word[]>(this.apiUrl + "/words-by-type/" + word_type_id);
  }  
}
