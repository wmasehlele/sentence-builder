import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/Word';
import { WordType } from 'src/app/models/WordType';
import { SentenceService } from 'src/app/services/sentence.service';

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

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.sentenceService.getWordTypes().subscribe((wordTypes) => { this.wordTypes = wordTypes; });    
  }

  getWordsByType(word_type_id: number) {
    this.sentenceService.getWordsByType(word_type_id).subscribe((words) => { this.words = words; });
  } 

  onChooseWordChange(event: any){
    this.word_type_id = event.target.value;
    this.getWordsByType(this.word_type_id);
  }

  buildNewSentence(word: string){
    this.new_sentence = this.new_sentence + " " + word;
  }

  submitSentence(){
    if (!this.new_sentence.length){
      alert("Cannot submit blank sentence");
      return;
    }

    this.sentenceService.saveSentence(this.new_sentence.trim()).subscribe(() => { 
      this.new_sentence = "";
    });    
  }
}
