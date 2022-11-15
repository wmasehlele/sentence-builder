import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from 'src/app/models/Word';
import { WordType } from 'src/app/models/WordType';
import { Sentence } from 'src/app/models/Sentence';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + environment.appKey
  }),
};

@Injectable({
  providedIn: 'root'
})

export class SentenceService {
  
  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSentences(): Observable<Sentence[]>{
    return this.http.get<Sentence[]>(this.apiUrl + "/sentence/list", httpOptions);
  }

  getWordTypes(): Observable<WordType[]> {
    return this.http.get<WordType[]>(this.apiUrl + "/sentence/word-types", httpOptions);
  }

  getWordsByType(word_type_id: number): Observable<Word[]> {
    return this.http.get<Word[]>(this.apiUrl + "/sentence/words-by-type/" + word_type_id, httpOptions);
  }  

  saveSentence(sentence: string): Observable<Sentence> {
    let data = {
      "sentence": sentence 
    };
    return this.http.post<Sentence>(this.apiUrl + "/sentence/save-sentence", data, httpOptions);
  }    

  deleteSentence(sentence_id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + "/sentence/delete-sentence/" + sentence_id, httpOptions);
  }     
}
