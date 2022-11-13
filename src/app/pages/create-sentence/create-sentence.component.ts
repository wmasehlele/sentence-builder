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

  words: Word[] = [
    {
      "id": 1,
      "word_type_id": 1,
      "word": "The"
    },
    {
      "id": 2,
      "word_type_id": 1,
      "word": "Moment"
    },
    {
      "id": 3,
      "word_type_id": 1,
      "word": "Hello"
    }           
  ];
  wordTypes: WordType[] = [
    {
      "id": 1,
      "word_type": "Noun"
    },
    {
      "id": 2,
      "word_type": "Preposition"
    },
    {
      "id": 3,
      "word_type": "Verb"
    }     
  ];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.sentenceService.getWordTypes().subscribe((wordTypes) => { this.wordTypes = wordTypes; });    
  }

  getWordsByType(word_type: WordType) {
    this.sentenceService.getWordsByType(word_type.id).subscribe((words) => { this.words = words; });
  } 
}
