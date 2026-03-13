import { Component, Input } from '@angular/core';
import { Pet } from '../../../../core/models/pet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.html',
  styleUrls: ['./pet-card.scss']
})
export class PetCard {

  @Input() pet!: Pet;

}