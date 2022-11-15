import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  firstLetterUpper(phrase: string) {
    var newString = phrase.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c:string){return c.toUpperCase()});
    return newString;
  }
  
  convertToSentenceCase(sentence: string) {
    sentence = this.firstLetterUpper(sentence);
    return sentence;
  }  

}
