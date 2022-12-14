import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Sentence } from 'src/app/models/Sentence';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-list-sentences',
  templateUrl: './list-sentences.component.html',
  styleUrls: ['./list-sentences.component.css']
})
export class ListSentencesComponent implements OnInit {

  sentences: Sentence[] = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [5, 10, 15, 20, 25];

  constructor(private sentenceService: SentenceService, private router: Router) { }

  ngOnInit(): void {
    this.getSentences ();
  }

  getSentences () {
    this.sentenceService.getSentences().subscribe({
      next: (sentences: Sentence[]) => {
        this.sentences = sentences; 
      },
      error: (error) => { 
        alert((error as ErrorEvent).error.message);   
      },
      complete: () => {}
    });    
  }

  deleteSentence(sentence: Sentence) {
    let text = "You are about to delete a sentence. \n Press Ok to continue.";
    if (confirm(text) == true) {
      this.sentenceService.deleteSentence(sentence.id).subscribe({
        next: (respone: any) => {
          this.getSentences ();
        },
        error: (error) => { 
          alert((error as ErrorEvent).error.message);   
        },
        complete: () => {}
      });      
    } else {

    }    
  }
}
