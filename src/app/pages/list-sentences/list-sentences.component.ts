import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/Sentence';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-list-sentences',
  templateUrl: './list-sentences.component.html',
  styleUrls: ['./list-sentences.component.css']
})
export class ListSentencesComponent implements OnInit {

  sentences: Sentence[] = [];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
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
}
