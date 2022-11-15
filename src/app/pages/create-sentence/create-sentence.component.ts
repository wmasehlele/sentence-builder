import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Word } from 'src/app/models/Word';
import { WordType } from 'src/app/models/WordType';
import { SentenceService } from 'src/app/services/sentence.service';
import { HelperService } from 'src/app/services/helper.service';
import { Sentence } from 'src/app/models/Sentence';

@Component({
  selector: 'app-create-sentence',
  templateUrl: './create-sentence.component.html',
  styleUrls: ['./create-sentence.component.css']
})
export class CreateSentenceComponent implements OnInit {

  words: Word[] = [];
  wordTypes: WordType[] = [];
  word_type_id: number = 0; 
  new_sentence: string = "";

  constructor(private sentenceService: SentenceService, private router: Router, private helperService: HelperService) { }

  ngOnInit(): void {
    this.sentenceService.getWordTypes().subscribe({
      next: (wordTypes: WordType[]) => {
        this.wordTypes = wordTypes; 
      },
      error: (error) => { 
        alert((error as ErrorEvent).error.message);   
      },
      complete: () => {}
    });    
  }

  getWordsByType(word_type_id: number) {
    this.sentenceService.getWordsByType(word_type_id).subscribe({
      next: (words: Word[]) => {
        this.words = words; 
      },
      error: (error) => { 
        alert((error as ErrorEvent).error.message);   
      },
      complete: () => {}
    });     
  } 

  onChooseWordChange(event: any){
    this.word_type_id = event.target.value;
    this.getWordsByType(this.word_type_id);
  }

  buildNewSentence(word: Word){
    let spacer = " ";
    if (word.word_type_id == 10) { 
      spacer = "";
    }
    this.new_sentence = this.helperService.convertToSentenceCase(this.new_sentence.trim() + spacer + word.word.trim());
  }

  submitSentence(){
    if (!this.new_sentence.length){
      alert("Cannot submit blank sentence");
      return;
    }

    this.sentenceService.saveSentence(this.new_sentence.trim()).subscribe({
      next: (sentence: Sentence) => {
        if (!sentence.id){
          alert("Failed to submit sentence, please try agina.");
          return;
        }
        this.new_sentence = ""; 
        this.router.navigate(["/"]); 
      },
      error: (error) => { 
        alert((error as ErrorEvent).error.message);   
      },
      complete: () => {}
    });          
  }
}
