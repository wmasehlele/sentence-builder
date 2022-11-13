import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/Sentence';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-list-sentences',
  templateUrl: './list-sentences.component.html',
  styleUrls: ['./list-sentences.component.css']
})
export class ListSentencesComponent implements OnInit {

  sentences: Sentence[] = [
    {
      "id": 1,
      "sentence": "The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed."
    },
    {
      "id": 2,
      "sentence": "De most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed."
    }    
  ];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.sentenceService.getSentences().subscribe((sentences) => { this.sentences = sentences; });
  }
}
